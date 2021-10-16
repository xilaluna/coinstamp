const Easypost = require("@easypost/api")
const api = new Easypost(process.env.EASYPOST_TEST_KEY)

const { Client, resources, Webhook } = require("coinbase-commerce-node")
Client.init(process.env.COINBASE_KEY)

const postStamp = async (req, res) => {
  try {
    const carrierInfo = {
      carrier: req.body.carrier,
      service: req.body.service,
    }

    const toAddress = new api.Address({
      verify: [true],
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
      verify: [true],
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

    const shipment = new api.Shipment({
      to_address: savedToAddress,
      from_address: savedFromAddress,
      parcel: savedParcel,
    })
    const savedShipment = await shipment.save()

    const rateInfo = {
      rate: savedShipment.rates[0].rate,
    }

    // console.log(savedShipment)
    console.log(carrierInfo)

    res.render("cart", { savedShipment, carrierInfo, rateInfo })
  } catch (error) {
    console.log(error)
  }
}

const checkoutStamp = async (req, res) => {
  const { Charge } = resources

  try {
    const chargeData = {
      name: "Stamp",
      description: "Postage Stamp",
      local_price: {
        amount: 1.99,
        currency: "USD",
      },
      pricing_type: "fixed_price",
      metadata: {
        user: "johndoe",
      },
    }

    const charge = await Charge.create(chargeData)
    console.log(charge)
    res.redirect(charge.hosted_url)
    // shipment.buy(shipment.lowestRate(["USPS"], ["First"])).then(console.log)
  } catch (error) {
    console.log(error)
  }
}

const processStamp = async (req, res) => {
  const rawbody = req.rawBody
  const signature = req.headers["x-cc-webhook-signature"]
  const webhookSecret = process.env.WEBHOOK_SECRET

  try {
    const event = Webhook.verifyEventBody(rawbody, signature, webhookSecret)

    if (event.type === "charge:confirmed") {
      const orderStatus = "confirmed"
      const shipment = await api.Shipment.retrieve()
      await shipment.buy(s)
      res.render("order")
    }

    if (event.type === "charge:failed") {
      const orderStatus = "failed"
      res.render("order", { orderStatus })
    }

    res.send(`webhook recieved ${event.id}`)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  postStamp,
  checkoutStamp,
  processStamp,
}
