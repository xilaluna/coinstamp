import React from "react"

import Typography from "@mui/material/Typography"
import TableContainer from "@mui/material/TableContainer"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"

import Item from "./Item"

const OrderTable = () => {
  // const items = data.map((obj) => {
  //   const { carrier, service, fromName, toName } = obj
  //   return (
  //     <Item carrier={carrier} service={service} fromName={fromName} toName={toName} />
  //   )
  // })
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Order
      </Typography>
      <TableContainer>
        <Table>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  )
}

export default OrderTable
