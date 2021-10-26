const express = require("express")
const router = express.Router()
const rates = require("../controllers/ratesController")

router.get("/", rates.getRates)

module.exports = router
