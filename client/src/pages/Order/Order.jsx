import React from "react"

import Paper from "@mui/material/Paper"
import Container from "@mui/material/Container"

import OrderTable from "../../components/OrderTable/OrderTable"

const Order = () => {
  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 4 }}>
        <OrderTable />
      </Paper>
    </Container>
  )
}

export default Order
