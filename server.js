require("dotenv").config()
const express = require("express")
const session = require("express-session")
const fs = require("fs")
const https = require("https")
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
    proxy: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_CONNECTION_STRING,
    }),
    cookie: {
      expires: false,
      secure: true,
      sameSite: true,
    },
  })
)
app.use(async (req, res, next) => {
  res.locals.session = req.session
  next()
})
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

const server = https.createServer(
  {
    key: fs.readFileSync(process.env.SSL_KEY_FILE),
    cert: fs.readFileSync(process.env.SSL_CERT_FILE),
  },
  app
)

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Server listening on port : ${PORT}`)
})
