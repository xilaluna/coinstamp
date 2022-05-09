import React from "react"

import Typography from "@mui/material/Typography"
import TableContainer from "@mui/material/TableContainer"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"

import Item from "./Item"

const RateTable = (props) => {
  const { rates } = props

  return (
    <React.Fragment>
      {rates ? (
        <React.Fragment>
          <Typography variant="h5" gutterBottom>
            Select a Rate
          </Typography>
          <TableContainer>
            <Table>
              <TableBody>
                {rates.map((obj) => {
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
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </React.Fragment>
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <CircularProgress />
        </Box>
      )}
    </React.Fragment>
  )
}

export default RateTable
