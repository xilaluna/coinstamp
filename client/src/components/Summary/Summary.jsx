import React from "react"

import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Divider from "@mui/material/Divider"

import { useDispatch } from "react-redux"
import { checkoutCart } from "../../redux/slices/cartSlice"

const Summary = (props) => {
  const { cart } = props
  const dispatch = useDispatch()

  let orderTotal = 0
  let subTotal = 0

  for (let i = 0; i < cart.length; i++) {
    const ratePrice = parseFloat(cart[i].rates[0].rate)
    subTotal += ratePrice
    orderTotal += ratePrice
  }

  const handleCheckout = () => {
    dispatch(checkoutCart())
  }
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Summary
      </Typography>
      <Stack spacing={2}>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Typography>Subtotal</Typography>
          {subTotal === 0 ? (
            <Typography>$0.00</Typography>
          ) : (
            <Typography>{`$${subTotal}`}</Typography>
          )}
        </Stack>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Typography>Service Fee</Typography>
          {subTotal === 0 ? (
            <Typography>$0.00</Typography>
          ) : (
            <Typography>$5.00</Typography>
          )}
        </Stack>
        <Divider />
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Typography>Order Total</Typography>
          {subTotal === 0 ? (
            <Typography>$0.00</Typography>
          ) : (
            <Typography>{`$${orderTotal + 5}`}</Typography>
          )}
        </Stack>
        <Button variant="contained" onClick={handleCheckout}>
          Checkout
        </Button>
      </Stack>
    </React.Fragment>
  )
}

export default Summary
