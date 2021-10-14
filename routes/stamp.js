const express = require("express")
const router = express.Router()
const stamp = require("../controllers/stamp")

router.post("/", stamp.postStamp)

module.exports = router
