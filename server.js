require("dotenv").config()
const express = require("express")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const exphbs = require("express-handlebars")

const app = express()

app.use(cookieParser())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
)
app.use(express.static("public"))

app.engine("handlebars", exphbs())
app.set("view engine", "handlebars")

const indexRouter = require("./routes/index")
const stampRouter = require("./routes/stamp")
const cartRouter = require("./routes/cart")
const orderRouter = require("./routes/order")

app.use("/", indexRouter)
app.use("/stamp", stampRouter)
app.use("/cart", cartRouter)
app.use("/order", orderRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on port : ${PORT}`)
})
