import express from "express"
import {
  getCart,
  addToCart,
  deleteFromCart,
  checkoutCart,
} from "../controllers/cartController.js"
const router = express.Router()

router.get("/", getCart)
router.post("/:id", addToCart)
router.delete("/:id", deleteFromCart)
router.get("/checkout", checkoutCart)

export default router
