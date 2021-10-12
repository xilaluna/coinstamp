const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.render("home")
})

router.get("/login", (req, res) => {
  res.render("login")
})

router.get("/register", (req, res) => {
  res.render("register")
})

router.get("/cart", (req, res) => {
  res.render("cart")
})

module.exports = router
