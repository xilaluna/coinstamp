import "./config/config.js"
import express from "express"
import cors from "cors"
import stampRouter from "./routes/stampRoutes.js"
import path from "path"

// init app
const app = express()

// JSON parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// init cors
app.use(cors())

// routes init
app.use("/stamp", stampRouter)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`Server listening on port : ${PORT}`)
})
