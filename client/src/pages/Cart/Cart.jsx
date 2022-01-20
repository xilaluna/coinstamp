import React from "react"

import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"

import CartTable from "../../components/CartTable/CartTable"
import Summary from "../../components/Summary/Summary"

import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { getCart } from "../../redux/slices/cartSlice"

const PaperStyles = {
  p: 4,
}

const Cart = () => {
  const { cart, status } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  if (status === "idle") {
    dispatch(getCart())
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item md={8}>
          <Paper sx={PaperStyles}>
            <CartTable cart={cart} />
          </Paper>
        </Grid>
        <Grid item md={4}>
          <Paper sx={PaperStyles}>
            <Summary cart={cart} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Cart
