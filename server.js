require("dotenv").config()
const express = require("express")
const cookieParser = require("cookie-parser")
const exphbs = require("express-handlebars")

const app = express()

app.use(cookieParser())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static("public"))

app.engine("handlebars", exphbs())
app.set("view engine", "handlebars")

const indexRouter = require("./routes/index")
const authRouter = require("./routes/auth")
const stampRouter = require("./routes/stamp")
const cartRouter = require("./routes/cart")
const connectDatabase = require("./config/db")

app.use("/", indexRouter)
app.use("/", authRouter)
app.use("/stamp", stampRouter)
app.use("/cart", cartRouter)
connectDatabase()

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on port : ${PORT}`)
})
