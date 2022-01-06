import React from "react"
import Grid from "@mui/material/Grid"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Typography from "@mui/material/Typography"

const CarrierForm = () => {
  const [carrier, setCarrier] = React.useState("")

  const handleCarrierChange = (event) => {
    setCarrier(event.target.value)
  }

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Carrier Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <FormControl fullWidth>
            <InputLabel id="carrier-select-label">Carrier</InputLabel>
            <Select
              labelId="carrier-select-label"
              id="carrier-select"
              value={carrier}
              label="Carrier"
              onChange={handleCarrierChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6}>
          <FormControl fullWidth>
            <InputLabel id="carrier-select-label">Carrier</InputLabel>
            <Select
              labelId="carrier-select-label"
              id="carrier-select"
              value={carrier}
              label="Carrier"
              onChange={handleCarrierChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default CarrierForm
