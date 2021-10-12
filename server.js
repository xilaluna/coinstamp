require("dotenv").config()
const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine("handlebars", exphbs())
app.set("view engine", "handlebars")

app.get("/", (req, res) => {
  res.render("home")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on port : ${PORT}`)
})

module.exports = app
