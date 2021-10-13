const express = require("express")
const router = express.Router()
const auth = require("../controllers/auth")

router.post("/register", auth.postRegister)
router.post("/login", auth.postLogin)

module.exports = router
