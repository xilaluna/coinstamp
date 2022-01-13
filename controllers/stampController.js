import Easypost from "@easypost/api"
const api = new Easypost(process.env.EASYPOST_TEST_KEY)

export const getStamp = async (req, res) => {
  // fetch the shipment address
  res.send("Get Stamp")
}

export const createStamp = async (req, res) => {
  const stamp = req.body
  const toAddressData = {
    verify: ["true"],
    name: stamp.toName,
    street1: stamp.toStreet1,
    street2: stamp.toStreet2,
    city: stamp.toCity,
    state: stamp.toState,
    zip: stamp.toZip,
    country: stamp.toCountry,
    phone: stamp.toPhone,
  }
  const fromAddressData = {
    verify: ["true"],
    name: stamp.fromName,
    street1: stamp.fromStreet1,
    street2: stamp.fromStreet2,
    city: stamp.fromCity,
    state: stamp.fromState,
    zip: stamp.fromZip,
    country: stamp.fromCountry,
    phone: stamp.fromPhone,
  }
  const parcelInfoData = {
    predefined_package: stamp.predefined_package,
    length: parseFloat(stamp.packageLength),
    width: parseFloat(stamp.packageWidth),
    height: parseFloat(stamp.packageHeight),
    weight:
      parseFloat(stamp.packageWeightOunces) + parseFloat(stamp.packageWeightPounds) * 16,
  }
  try {
    const toAddress = await new api.Address(toAddressData)
    const fromAddress = await new api.Address(fromAddressData)
    const parcelInfo = await new api.Parcel(parcelInfoData)

    const shipment = await new api.Shipment({
      to_address: toAddress,
      from_address: fromAddress,
      parcel: parcelInfo,
    })

    const response = await shipment.save()

    res.status(201).json(response)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const checkoutStamp = async (req, res) => {
  res.send("Checking Out Stamp")
}

export const getAddresses = async (req, res) => {
  try {
    const toAddress = await api.Address.retrieve(req.query.to_address)
    const fromAddress = await api.Address.retrieve(req.query.from_address)

    console.log(req.query)
    res.status(200).json({ to_address: toAddress, from_address: fromAddress })
  } catch (error) {
    res.status(400).json({ message: error })
  }
}
