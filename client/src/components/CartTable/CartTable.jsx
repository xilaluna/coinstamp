import React from "react"

import Typography from "@mui/material/Typography"
import TableContainer from "@mui/material/TableContainer"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"

import Item from "./Item"

const CartTable = (props) => {
  const { cart } = props

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Cart
      </Typography>
      <TableContainer>
        {cart.length > 0 ? (
          <Table>
            <TableBody>
              {cart.map((obj) => {
                const { id, rates, to_address, from_address } = obj
                return (
                  <Item
                    key={`${id}-${from_address.name}`}
                    id={id}
                    carrier={rates[0].carrier}
                    service={rates[0].service}
                    fromName={from_address.name}
                    toName={to_address.name}
                    rate={rates[0].rate}
                  />
                )
              })}
            </TableBody>
          </Table>
        ) : (
          <Typography>No items in cart</Typography>
        )}
      </TableContainer>
    </React.Fragment>
  )
}

export default CartTable
