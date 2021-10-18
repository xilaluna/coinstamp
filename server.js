require("dotenv").config()
const express = require("express")
const session = require("express-session")
const MongoStore = require("connect-mongo")
const exphbs = require("express-handlebars")

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_CONNECTION_STRING,
    }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
)
// app.use(express.static("public"))
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
