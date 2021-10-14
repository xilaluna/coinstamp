const express = require("express")
const router = express.Router()
const stamp = require("../controllers/stamp")

router.post("/", stamp.postStamp)
router.post("/:id/checkout", stamp.buyStamp)

module.exports = router
