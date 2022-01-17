import easypost from "../config/easypost.js"

export const getStamp = async (req, res) => {
  try {
    const stamp = req.session.stamp
    res.status(200).json(stamp)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const createStamp = async (req, res) => {
  const stamp = req.body
  try {
    const shipment = await new easypost.Shipment({
      to_address: await new easypost.Address({
        verify: ["true"],
        name: stamp.toName,
        street1: stamp.toStreet1,
        street2: stamp.toStreet2,
        city: stamp.toCity,
        state: stamp.toState,
        zip: stamp.toZip,
        country: stamp.toCountry,
        phone: stamp.toPhone,
      }),
      from_address: await new easypost.Address({
        verify: ["true"],
        name: stamp.fromName,
        street1: stamp.fromStreet1,
        street2: stamp.fromStreet2,
        city: stamp.fromCity,
        state: stamp.fromState,
        zip: stamp.fromZip,
        country: stamp.fromCountry,
        phone: stamp.fromPhone,
      }),
      parcel: await new easypost.Parcel({
        predefined_package: stamp.predefined_package,
        length: parseFloat(stamp.packageLength),
        width: parseFloat(stamp.packageWidth),
        height: parseFloat(stamp.packageHeight),
        weight:
          parseFloat(stamp.packageWeightOunces) +
          parseFloat(stamp.packageWeightPounds) * 16,
      }),
    })

    const response = await shipment.save()

    const fullAdress = {
      to_address: await easypost.Address.retrieve(response.to_address.id),
      from_address: await easypost.Address.retrieve(response.from_address.id),
    }

    const fullStamp = { ...response, ...fullAdress }

    if (!req.session.stamp) {
      req.session.stamp = {}
    }

    req.session.stamp = fullStamp

    res.status(201).json(fullStamp)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
