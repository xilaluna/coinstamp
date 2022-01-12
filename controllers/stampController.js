import Easypost from "@easypost/api"
const api = new Easypost(process.env.EASYPOST_TEST_KEY)

export const getStamp = async (req, res) => {
  res.send("Get Stamp")
}

export const createStamp = async (req, res) => {
  const stamp = req.body
  const shipment = new api.Shipment({
    to_address: new api.Address({
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
    from_address: new api.Address({
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
    parcel: new api.Parcel({
      predefined_package: stamp.predefined_package,
      length: parseFloat(stamp.packageLength),
      width: parseFloat(stamp.packageWidth),
      height: parseFloat(stamp.packageHeight),
      weight:
        parseFloat(stamp.packageWeightOunces) +
        parseFloat(stamp.packageWeightPounds) * 16,
    }),
  })

  try {
    await shipment.save()
    res.status(201).json(shipment)
  } catch (error) {
    res.status(409).json({ message: error })
  }
}

export const getRates = async (req, res) => {
  res.json([
    { carrier: "USPS", service: "Priority", rate: 27.4, delivery_days: 2 },
    { carrier: "USPS", service: "Priority", rate: 35.48, delivery_days: 1 },
    { carrier: "USPS", service: "Priority", rate: 35.48, delivery_days: 1 },
  ])
}

export const checkoutStamp = async (req, res) => {
  res.send("Checking Out Stamp")
}
