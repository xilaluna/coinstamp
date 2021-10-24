const Easypost = require("@easypost/api")
const api = new Easypost(process.env.EASYPOST_TEST_KEY)

const { Client, resources, Webhook } = require("coinbase-commerce-node")
Client.init(process.env.COINBASE_KEY)

const postStamp = async (req, res) => {
  try {
    // initialize shipment
    const shipment = new api.Shipment({
      to_address: await new api.Address({
        verify: [true],
        name: req.body.toName,
        street1: req.body.toStreet1,
        street2: req.body.toStreet2,
        city: req.body.toCity,
        state: req.body.toState,
        zip: req.body.toZip,
        country: req.body.toCountry,
        phone: req.body.toPhone,
      }),
      from_address: await new api.Address({
        verify: [true],
        name: req.body.fromName,
        street1: req.body.fromStreet1,
        street2: req.body.fromStreet2,
        city: req.body.fromCity,
        state: req.body.fromState,
        zip: req.body.fromZip,
        country: req.body.fromCountry,
        phone: req.body.fromPhone,
      }),
      parcel: await new api.Parcel({
        length: req.body.length,
        width: req.body.width,
        height: req.body.height,
        predefined_package: req.body.predefined_package,
        weight: 10,
      }),
    })
    const savedShipment = await shipment.save()

    console.log(savedShipment.rates)
    // initialize rateInfo & get price based on user data
    let rateInfo = {}
    for (let i = 0; i < savedShipment.rates.length; i++) {
      if (
        savedShipment.rates[i].service == req.body.service &&
        savedShipment.rates[i].carrier == req.body.carrier
      ) {
        rateInfo = { rate: savedShipment.rates[i].rate }
      }
    }

    // initialize carrier info
    const carrierInfo = {
      carrier: req.body.carrier,
      service: req.body.service,
    }

    // create stamp object
    const stamp = {
      savedShipment,
      carrierInfo,
      rateInfo,
    }

    req.session.stamps.push(stamp)

    // render cart page with stamp appended into the req.session.stamp array
    res.render("cart", {
      stamps: req.session.stamps,
    })
  } catch (error) {
    console.log(error)
  }
}

const checkoutStamp = async (req, res) => {
  const { Charge } = resources
  try {
    const chargeData = {
      name: "Postage",
      description: "Postage Order",
      local_price: {
        amount: 1,
        currency: "USD",
      },
      pricing_type: "fixed_price",
      metadata: {
        user: "john",
      },
    }

    const charge = await Charge.create(chargeData)
    res.redirect(charge.hosted_url)
    res.send("No stamps in cart")
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
