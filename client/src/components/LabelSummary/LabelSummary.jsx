import React from "react"

import Grid from "@mui/material/Grid"
import CircularProgress from "@mui/material/CircularProgress"
import Divider from "@mui/material/Divider"
import Box from "@mui/material/Box"

import Address from "./Address"

const LabelSummary = (props) => {
  const { to_address, from_address } = props

  return (
    <React.Fragment>
      {to_address && from_address ? (
        <Grid container spacing={4}>
          <Grid item md={6}>
            <Address
              header={"From"}
              name={from_address.name}
              street1={from_address.street1}
              street2={from_address.street2}
              city={from_address.city}
              state={from_address.state}
              zip={from_address.zip}
              country={from_address.country}
              phone={from_address.phone}
            />
          </Grid>
          <Divider />
          <Grid item md={6}>
            <Address
              header={"To"}
              name={to_address.name}
              street1={to_address.street1}
              street2={to_address.street2}
              city={to_address.city}
              state={to_address.state}
              zip={to_address.zip}
              country={to_address.country}
              phone={to_address.phone}
            />
          </Grid>
        </Grid>
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <CircularProgress />
        </Box>
      )}
    </React.Fragment>
  )
}

export default LabelSummary
