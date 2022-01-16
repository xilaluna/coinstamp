import "./config/config.js"
import express from "express"
import cors from "cors"
import stampRouter from "./routes/stampRoutes.js"
// import session from "express-session"
import path from "path"
// import { createClient } from "redis"
// import * as connectRedis from "connect-redis"

// init app
const app = express()

// init redis
// const redisClient = createClient()
// redisClient.unref()
// redisClient.on("error", (error) => console.log("Redis Client Error", error))

// const RedisStore = connectRedis(session)
// let store = new RedisStore({ client: redisClient })

// JSON parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// init cors
app.use(cors({ credentials: true, origin: "http://localhost:3000" }))

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
