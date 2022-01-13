import express from "express"
import {
  getStamp,
  createStamp,
  checkoutStamp,
  getAddresses,
} from "../controllers/stampController.js"
const router = express.Router()

router.get("/", getStamp)
router.post("/create", createStamp)
router.get("/checkout", checkoutStamp)
router.get("/addresses", getAddresses)

export default router
