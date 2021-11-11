import React from "react"
import { InputLabel, Grid, FormControl, OutlinedInput, InputAdornment } from "@mui/material"

const AddressForm = () => {
  return (
    <>
      <Grid item xs={4}>
        <FormControl fullWidth>
          <InputLabel htmlFor="length-input">Length</InputLabel>
          <OutlinedInput id="length-input" label="Length" />
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl fullWidth>
          <InputLabel htmlFor="width-input">Width</InputLabel>
          <OutlinedInput id="width-input" label="Width" />
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl fullWidth>
          <InputLabel htmlFor="height-input">Height</InputLabel>
          <OutlinedInput id="height-input" label="Height" />
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel htmlFor="pounds-input">Pounds</InputLabel>
          <OutlinedInput
            id="pounds-input"
            label="Pounds"
            endAdornment={<InputAdornment position="end">lb</InputAdornment>}
          />
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel htmlFor="ounces-input">Ounces</InputLabel>
          <OutlinedInput
            id="ounces-input"
            label="Ounces"
            endAdornment={<InputAdornment position="end">oz</InputAdornment>}
          />
        </FormControl>
      </Grid>
    </>
  )
}

export default AddressForm
