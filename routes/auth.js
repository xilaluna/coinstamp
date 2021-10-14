const express = require("express")
const router = express.Router()
const auth = require("../controllers/auth")

router.post("/register", auth.postRegister)
router.post("/login", auth.postLogin)
router.post("/logout", auth.getLogout)

module.exports = router
