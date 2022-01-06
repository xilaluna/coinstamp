import React from "react"

import Typography from "@mui/material/Typography"
import TableContainer from "@mui/material/TableContainer"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"

import Item from "./Item"
import data from "../../assets/data/testorder.json"

const CartTable = () => {
  const items = data.map((obj) => {
    const { carrier, service, fromName, toName, rate } = obj
    return (
      <Item
        carrier={carrier}
        service={service}
        fromName={fromName}
        toName={toName}
        rate={rate}
      />
    )
  })
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Cart
      </Typography>
      <TableContainer>
        <Table>
          <TableBody>{items}</TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  )
}

export default CartTable
