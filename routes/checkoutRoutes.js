import express from "express"
import { checkoutStamps } from "../controllers/checkoutController.js"
const router = express.Router()

router.get("/", checkoutStamps)

export default router
