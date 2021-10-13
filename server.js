require("dotenv").config()
const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.use(express.static("public"))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.engine("handlebars", exphbs())
app.set("view engine", "handlebars")

const indexRouter = require("./routes/index")
const cartRouter = require("./routes/cart")
const connectDatabase = require("./data/db")

app.use("/", indexRouter)
app.use("/cart", cartRouter)
connectDatabase()

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on port : ${PORT}`)
})
