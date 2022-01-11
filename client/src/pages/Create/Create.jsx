import React from "react"

import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"

import CarrierForm from "../../components/Forms/CarrierForm"
import MetricsForm from "../../components/Forms/MetricsForm"
import AddressForm from "../../components/Forms/AddressForm"
import SubmitForm from "../../components/Forms/SubmitForm"

const Create = () => {
  return (
    <Container maxWidth="lg">
      <Paper sx={{ p: 4 }}>
        <form action="/stamp">
          <Grid container spacing={8}>
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
        </form>
      </Paper>
    </Container>
  )
}

export default Create
