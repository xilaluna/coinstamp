import express from "express"
import { createStamp } from "../controllers/stampController.js"
const router = express.Router()

router.get("/", createStamp)

export default router
