import express from "express"
import { getOrders, processOrders } from "../controllers/ordersController.js"
const router = express.Router()

router.get("/", getOrders)
router.post("/", processOrders)

export default router
