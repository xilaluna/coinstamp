import React from "react"

import Grid from "@mui/material/Grid"
import Address from "./Address"
import { useSelector } from "react-redux"

const LabelSummary = () => {
  const addresses = useSelector((state) => state.stamp.addresses)
  console.log(addresses)
  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item md={6}>
          <Address
            header={"From"}
            name={addresses.to_address.name}
            street1={addresses.to_address.street1}
            street2={"None"}
            city={addresses.to_address.city}
            state={addresses.to_address.state}
            zip={addresses.to_address.zip}
            country={addresses.to_address.street1.country}
            phone={"None"}
          />
        </Grid>
        <Grid item md={6}>
          <Address
            header={"To"}
            name={addresses.from_address.name}
            street1={addresses.from_address.street1}
            street2={"None"}
            city={addresses.from_address.city}
            state={addresses.from_address.state}
            zip={addresses.from_address.zip}
            country={addresses.from_address.street1.country}
            phone={"None"}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default LabelSummary
