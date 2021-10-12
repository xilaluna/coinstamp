require("dotenv").config()
const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.engine("handlebars", exphbs())
app.set("view engine", "handlebars")

const indexRouter = require("./routes/index")
app.use("/", indexRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on port : ${PORT}`)
})
