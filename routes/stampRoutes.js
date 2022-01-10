import express from "express"
import {
  getStamp,
  createStamp,
  getRates,
  checkoutStamp,
} from "../controllers/stampController.js"
const router = express.Router()

router.get("/", getStamp)
router.post("/create", createStamp)
router.get("/rates", getRates)
router.get("/checkout", checkoutStamp)

export default router
