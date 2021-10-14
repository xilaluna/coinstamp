const Easypost = require("@easypost/api")
const api = new Easypost(process.env.EASYPOST_TEST_KEY)

const postStamp = async (req, res) => {
  const toAddress = new api.Address({
    verify: ["true"],
    name: req.body.toName,
    street1: req.body.toStreet1,
    street2: req.body.toStreet2,
    city: req.body.toCity,
    state: req.body.toState,
    zip: req.body.toZip,
    country: req.body.toCountry,
    phone: req.body.toPhone,
  })
  const savedToAddress = await toAddress.save()

  const fromAddress = new api.Address({
    verify: ["true"],
    name: req.body.fromName,
    street1: req.body.fromStreet1,
    street2: req.body.fromStreet2,
    city: req.body.fromCity,
    state: req.body.fromState,
    zip: req.body.fromZip,
    country: req.body.fromCountry,
    phone: req.body.fromPhone,
  })
  const savedFromAddress = await fromAddress.save()

  // const weightConverted = (pounds, ounces) => {
  //   let pooundsToOunces = pounds * 16.0
  //   return (total = pooundsToOunces + ounces)
  // }

  const parcel = new api.Parcel({
    length: req.body.length,
    width: req.body.width,
    height: req.body.height,
    predefined_package: req.body.predefined_package,
    // weight: weightConverted(req.body.pounds, req.body.ounces),
    weight: 10,
  })

  const savedParcel = await parcel.save()
  try {
    const shipment = new api.Shipment({
      to_address: savedToAddress,
      from_address: savedFromAddress,
      parcel: savedParcel,
    })

    const savedShipment = await shipment.save()
    console.log(savedShipment)

    res.redirect("/cart")
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  postStamp,
}
