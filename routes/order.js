const express = require("express")
const router = express.Router()

const order = require("../controllers/orderController")

router.get("/", order.getOrder)

module.exports = router
