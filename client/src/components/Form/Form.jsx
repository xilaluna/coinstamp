import React from "react"
import { FormControl, InputLabel, MenuItem, Select, Container, Grid, Button } from "@mui/material"
import CarrierForm from "./Forms/CarrierForm"
import MetricsForm from "./Forms/MetricsForm"
import AddressForm from "./Forms/Address"

const Form = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <form action="/stamp">
        <Grid container spacing={2}>
          <CarrierForm />
          <MetricsForm />
          <Grid item xs={6}>
            <AddressForm />
          </Grid>
          <Grid item xs={6}>
            <AddressForm />
          </Grid>
          <Grid item xs={6}>
            <FormControl size="medium">
              <InputLabel id="signature-label">Signature</InputLabel>
              <Select labelId="signature-label" id="signature-input" label="Signature">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained">Calculate Rates</Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}

export default Form
