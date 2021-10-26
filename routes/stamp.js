const express = require("express")
const router = express.Router()
const stamp = require("../controllers/stampController")

router.post("/", stamp.postStamp)
router.get("/checkout", stamp.checkoutStamp)
router.get("/order", stamp.processStamp)

module.exports = router
