import "./config/config.js"
import express from "express"
import cors from "cors"
import session from "express-session"
import path from "path"
import stampRouter from "./routes/stampRoutes.js"
import cartRouter from "./routes/cartRoutes.js"
import orderRouter from "./routes/orderRoutes.js"

// import { createClient } from "redis"
// import * as connectRedis from "connect-redis"

// init app
const app = express()

// JSON parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60,
    },
  })
)

// init redis
// const redisClient = createClient()
// redisClient.unref()
// redisClient.on("error", (error) => console.log("Redis Client Error", error))

// const RedisStore = connectRedis(session)
// let store = new RedisStore({ client: redisClient })

// init cors
app.use(cors({ credentials: true, origin: "http://localhost:3000" }))

// routes init
app.use("/stamp", stampRouter)
app.use("/cart", cartRouter)
app.use("/order", orderRouter)

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
