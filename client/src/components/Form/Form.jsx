import React from "react"

import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"

import CarrierForm from "./Forms/CarrierForm"
import MetricsForm from "./Forms/MetricsForm"
import AddressForm from "./Forms/AddressForm"
import SubmitForm from "./Forms/SubmitForm"

const Form = () => {
  return (
    <Paper sx={{ p: 3, my: 4 }}>
      <Box component="form" action="/stamp">
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <CarrierForm />
          </Grid>
          <Grid item xs={12}>
            <MetricsForm />
          </Grid>
          <Grid item xs={6}>
            <AddressForm header={"From"} />
          </Grid>
          <Grid item xs={6}>
            <AddressForm header={"To"} />
          </Grid>
          <Grid item xs={12}>
            <SubmitForm />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  )
}

export default Form
