import React from "react"
import { InputLabel, Grid, FormControl, Select, MenuItem } from "@mui/material"

const CarrierForm = () => {
  const [carrier, setCarrier] = React.useState("")

  const handleChange = (event) => {
    setCarrier(event.target.value)
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Carrier</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={carrier}
            autoWidth
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>USPS</MenuItem>
            <MenuItem value={20}>UPS</MenuItem>
            <MenuItem value={30}>DHL</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default CarrierForm
