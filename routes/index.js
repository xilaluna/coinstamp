const express = require("express")
const router = express.Router()
const checkAuth = require("../middlewares/auth")

router.get("/", (req, res) => {
  let currentUser = req.user
  res.render("home")
})

module.exports = router
