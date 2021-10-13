require("dotenv").config()
const express = require("express")
const exphbs = require("express-handlebars")
const mongoose = require("mongoose")

const app = express()

app.use(express.static("public"))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.engine("handlebars", exphbs())
app.set("view engine", "handlebars")

const indexRouter = require("./routes/index")
const cartRouter = require("./routes/cart")

app.use("/", indexRouter)
app.use("/cart", cartRouter)

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    console.log("MongoDB connected")
  } catch (err) {
    console.log("Failed to connect to MongoDB", err)
  }
}
connectDatabase()

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on port : ${PORT}`)
})
