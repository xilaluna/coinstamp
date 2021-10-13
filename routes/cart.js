const express = require("express")
const router = express.Router()

const cart = require("../controllers/cart")

router.get("/", cart.getCart)

module.exports = router
