import express from "express"
import {
  getStamp,
  createStamp,
  checkoutStamp,
  getAddresses,
  orderStamp,
} from "../controllers/stampController.js"
const router = express.Router()

router.get("/", getStamp)
router.post("/create", createStamp)
router.post("/checkout", checkoutStamp)
router.get("/addresses", getAddresses)
router.get("/order", orderStamp)

export default router
