import React from "react"
import FormControl from "@mui/material/FormControl"
import FormGroup from "@mui/material/FormGroup"
import FormLabel from "@mui/material/FormLabel"

import { InputLabel, Grid, Select, MenuItem, TextField } from "@mui/material"

const CarrierForm = () => {
  const [carrier, setCarrier] = React.useState("")

  const handleChange = (event) => {
    setCarrier(event.target.value)
  }

  return (
    <React.Fragment>
      <FormControl>
        <FormLabel component="legend">Carrier Information</FormLabel>
        <FormGroup row>
          <InputLabel id="carrier-label">Carrier</InputLabel>
          <Select
            labelId="carrier-label"
            id="carrier-select"
            value={carrier}
            label="Carrier"
            onChange={handleChange}
            autoWidth
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
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
        </FormGroup>
      </FormControl>
    </React.Fragment>
  )
}

export default CarrierForm
