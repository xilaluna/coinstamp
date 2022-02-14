import express from "express"
import { getOrder, processOrder } from "../controllers/orderController.js"
const router = express.Router()

router.get("/", getOrder)
router.post("/", processOrder)

export default router
