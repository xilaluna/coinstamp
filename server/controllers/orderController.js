import { Webhook } from "../config/coinbase.js"
import easypost from "../config/easypost.js"

export const getOrder = async (req, res) => {
  try {
    if (!req.session.order) {
      req.session.order = []
    }
    res.status(200).json(req.session.order)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const processOrder = async (req, res) => {
  const rawBody = req.rawBody
  const signature = req.headers["x-cc-webhook-signature"]
  const webhookSecret = process.env.WEBHOOK_SECRET
  try {
    const event = Webhook.verifyEventBody(rawBody, signature, webhookSecret)

    if (event.type === "charge:confirmed") {
      if (!req.session.order) {
        req.session.order = []
      }
      for (let i = 0; i < req.session.cart.length; i++) {
        const shipment = await easypost.Shipment.retrieve(req.session.cart[i].id)
        const boughtShipment = await shipment.buy(req.session.cart[i].rates[0].rate)
        req.session.order.push(boughtShipment)
      }

      res.status(201).redirect("http://localhost:3000/order")
    }
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
