import React from "react"
import { Grid, FormControl, OutlinedInput, InputLabel } from "@mui/material"

const FromForm = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="name-input">Name</InputLabel>
            <OutlinedInput id="name-input" label="Name" />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="address-input">Address</InputLabel>
            <OutlinedInput id="address-input" label="Address" />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="second-address-input">Apt/Suite</InputLabel>
            <OutlinedInput id="second-address-input" label="Apt/Suite" />
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel htmlFor="city-input">City</InputLabel>
            <OutlinedInput id="city-input" label="City" />
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel htmlFor="state-input">State</InputLabel>
            <OutlinedInput id="state-input" label="State" />
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel htmlFor="zip-input">Zip</InputLabel>
            <OutlinedInput id="zip-input" label="Zip" />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="country-input">Country</InputLabel>
            <OutlinedInput id="country-input" label="Country" />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="phone-input">Phone</InputLabel>
            <OutlinedInput id="phone-input" label="Phone" />
          </FormControl>
        </Grid>
      </Grid>
    </>
  )
}

export default FromForm
