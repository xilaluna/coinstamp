import React from "react"

import Typography from "@mui/material/Typography"
import TableContainer from "@mui/material/TableContainer"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"

import Item from "./Item"
import { useSelector } from "react-redux"

const RateTable = () => {
  const rates = useSelector((state) => state.stamp.shipment.rates)

  const rateData = rates.map((obj) => {
    const { id, carrier, service, delivery_days, rate } = obj
    return (
      <Item
        key={`${id}-${service}`}
        id={id}
        carrier={carrier}
        service={service}
        delivery_days={delivery_days}
        rate={rate}
      />
    )
  })
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Select a Rate
      </Typography>
      <TableContainer>
        <Table>
          <TableBody>{rateData}</TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  )
}

export default RateTable
