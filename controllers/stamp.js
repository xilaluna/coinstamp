const Easypost = require("@easypost/api")
const api = new Easypost(process.env.EASYPOST_TEST_KEY)

const postStamp = async (req, res) => {
  try {
    const fromAddress = new api.Address({
      name: req.body.fromName,
      street1: req.body.fromStreet1,
      street2: req.body.fromStreet2,
      city: req.body.fromCity,
      state: req.body.fromState,
      zip: req.body.fromZip,
      phone: req.body.fromPhone,
    })
    const fromAddress = await fromAddress.save()

    const toAddress = new api.Address({
      name: req.body.toName,
      street1: req.body.toStreet1,
      street2: req.body.toStreet2,
      city: req.body.toCity,
      state: req.body.toState,
      zip: req.body.toZip,
      phone: req.body.toPhone,
    })
    const toAddress = await toAddress.save()

    const parcel = new api.Parcel({
      length: req.body.length,
      width: req.body.width,
      height: req.body.height,
      predefined_package: req.body.predefined_package,
      weight: 10,
    })

    const parcel = await parcel.save()

    const shipment = new api.Shipment({
      to_address: toAddress,
      from_address: fromAddress,
      parcel: parcel,
    })

    const shipment = await shipment.save()
    console.log(shipment)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  postStamp,
}
