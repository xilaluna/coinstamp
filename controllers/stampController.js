import Easypost from "@easypost/api"
const api = new Easypost(process.env.EASYPOST_TEST_KEY)

export const getStamp = async (req, res) => {
  res.send("Get Stamp")
}

export const createStamp = async (req, res) => {
  const stamp = req.body
  const shipment = new api.Shipment({
    to_address: {
      verify: ["true"],
      name: stamp.toName,
      street1: stamp.toStreet1,
      street2: stamp.toStreet2,
      city: stamp.toCity,
      state: stamp.toState,
      zip: stamp.toZip,
      country: stamp.toCountry,
      phone: stamp.toPhone,
    },
    from_address: {
      verify: ["true"],
      name: stamp.fromName,
      street1: stamp.fromStreet1,
      street2: stamp.fromStreet2,
      city: stamp.fromCity,
      state: stamp.fromState,
      zip: stamp.fromZip,
      country: stamp.fromCountry,
      phone: stamp.fromPhone,
    },
    parcel: {
      predefined_package: stamp.predefined_package,
      length: parseFloat(stamp.length),
      width: parseFloat(stamp.width),
      height: parseFloat(stamp.height),
      weight: parseFloat(stamp.weight),
    },
  })

  try {
    await shipment.save()
    res.status(201).json(shipment)
  } catch (error) {
    res.status(409).json({ message: error })
  }
}

export const getRates = async (req, res) => {
  res.send("Getting Rates")
}

export const checkoutStamp = async (req, res) => {
  res.send("Checking Out Stamp")
}
