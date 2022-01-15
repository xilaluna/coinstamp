import React from "react"

import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"

import CartTable from "../../components/CartTable/CartTable"
import Summary from "../../components/Summary/Summary"

const PaperStyles = {
  p: 4,
}

const Cart = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item md={8}>
          <Paper sx={PaperStyles}>
            <CartTable />
          </Paper>
        </Grid>
        <Grid item md={4}>
          <Paper sx={PaperStyles}>
            <Summary />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Cart
