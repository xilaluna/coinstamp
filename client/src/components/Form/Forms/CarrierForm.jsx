import React from "react"
import { InputLabel, Grid, FormControl, Select, MenuItem, TextField } from "@mui/material"

const CarrierForm = () => {
  const [carrier, setCarrier] = React.useState("")

  const handleChange = (event) => {
    setCarrier(event.target.value)
  }

  return (
    <>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="carrier-label">Carrier</InputLabel>
          <Select
            labelId="carrier-label"
            id="carrier-select"
            value={carrier}
            label="Carrier"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="package-type-label">Package Type</InputLabel>
          <Select
            labelId="package-type-label"
            id="package-type"
            value={carrier}
            label="Package Type"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </>
  )
}

export default CarrierForm
