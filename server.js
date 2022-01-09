import dotenv from "dotenv"
import express from "express"
import session from "express-session"
import MongoStore from "connect-mongo"
import cors from "cors"

// route imports
import stampRouter from "./routes/stampRoutes.js"
import rateRouter from "./routes/ratesRoutes.js"
import checkoutStamps from "./routes/checkoutRoutes.js"

dotenv.config()

// init app
const app = express()

// JSON parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// init cors
app.use(cors())

// init session
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     proxy: true,
//     store: MongoStore.create({
//       mongoUrl: process.env.MONGODB_CONNECTION_STRING,
//     }),
//     cookie: {
//       expires: false,
//       secure: true,
//       sameSite: true,
//     },
//   })
// )

// routes init
app.use("/stamp", stampRouter)
app.use("/rates", rateRouter)
app.use("/checkout", checkoutStamps)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on port : ${PORT}`)
})
