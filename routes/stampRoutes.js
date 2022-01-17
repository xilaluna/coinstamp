import express from "express"
import { getStamp, createStamp } from "../controllers/stampController.js"
const router = express.Router()

router.get("/", getStamp)
router.post("/", createStamp)

export default router
