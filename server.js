import dotenv from "dotenv"
dotenv.config()

import express from "express"
import session from "express-session"
import MongoStore from "connect-mongo"
import cors from "cors"

// route imports
import stampRouter from "./routes/stampRoutes.js"

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

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on port : ${PORT}`)
})
