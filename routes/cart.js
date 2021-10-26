const express = require("express")
const router = express.Router()
const cart = require("../controllers/cartController")

router.get("/", cart.getCart)

module.exports = router
