import React from "react"

import Typography from "@mui/material/Typography"
import TableContainer from "@mui/material/TableContainer"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"

import Item from "./Item"
import data from "../../assets/data/testrates.json"

const RateTable = () => {
  const rates = data.map((obj) => {
    const { carrier, service, delivery_days, rate } = obj
    return (
      <Item
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
          <TableBody>{rates}</TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  )
}

export default RateTable
