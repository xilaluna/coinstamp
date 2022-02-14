import { Charge } from "../config/coinbase.js"

export const getCart = async (req, res) => {
  try {
    if (!req.session.cart) {
      req.session.cart = []
    }
    res.status(200).json(req.session.cart)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const addToCart = async (req, res) => {
  const rateId = req.params.id
  let stamp = req.session.stamp
  try {
    stamp.rates = stamp.rates.filter((rate) => rate.id === rateId)
    if (req.session.cart) {
      req.session.cart.push(stamp)
    } else {
      req.session.cart = [stamp]
    }
    const cart = req.session.cart

    res.status(201).json(cart)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const deleteFromCart = async (req, res) => {
  const stampId = req.params.id
  try {
    for (let i = 0; i < req.session.cart.length; i++) {
      if (req.session.cart[i].id === stampId) {
        req.session.cart.splice(i, 1)
      }
    }
    res.status(200).send(req.session.cart)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const checkoutCart = async (req, res) => {
  let ratePrice = 0
  try {
    for (let i = 0; i < req.session.cart.length; i++) {
      ratePrice += req.session.cart[i].rates[0].rate
    }

    const charge = await Charge.create({
      name: "Order",
      //fix me
      description: "order details",
      local_price: {
        amount: ratePrice,
        currency: "USD",
      },
      pricing_type: "fixed_price",
    })

    res.status(200).json(charge)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
