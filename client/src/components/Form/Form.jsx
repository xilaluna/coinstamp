import React from "react"

import Paper from "@mui/material/Paper"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

import CarrierForm from "./Forms/CarrierForm"
import MetricsForm from "./Forms/MetricsForm"
import AddressForm from "./Forms/Address"

const Form = () => {
  return (
    <Paper sx={{ p: 2, my: 2 }}>
      <Box component="form" action="/stamp">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CarrierForm />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  )
}

export default Form
