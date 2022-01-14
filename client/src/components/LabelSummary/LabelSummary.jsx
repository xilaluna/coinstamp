import React from "react"

import Grid from "@mui/material/Grid"
import CircularProgress from "@mui/material/CircularProgress"
import Divider from "@mui/material/Divider"
import Box from "@mui/material/Box"

import Address from "./Address"
import { useSelector } from "react-redux"

const LabelSummary = () => {
  const addresses = useSelector((state) => state.stamp.addresses)

  return (
    <React.Fragment>
      {Object.keys(addresses).length === 0 ? (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={4}>
          <Grid item md={6}>
            <Address
              header={"From"}
              name={addresses.from_address.name}
              street1={addresses.from_address.street1}
              street2={addresses.from_address.street2}
              city={addresses.from_address.city}
              state={addresses.from_address.state}
              zip={addresses.from_address.zip}
              country={addresses.from_address.country}
              phone={addresses.from_address.phone}
            />
          </Grid>
          <Divider />
          <Grid item md={6}>
            <Address
              header={"To"}
              name={addresses.to_address.name}
              street1={addresses.to_address.street1}
              street2={addresses.to_address.street2}
              city={addresses.to_address.city}
              state={addresses.to_address.state}
              zip={addresses.to_address.zip}
              country={addresses.to_address.country}
              phone={addresses.to_address.phone}
            />
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  )
}

export default LabelSummary
