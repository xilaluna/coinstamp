import React from "react"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"

const MetricsForm = () => {
  return (
    <React.Fragment>
      <Typography gutterBottom>Dimensions & Weight</Typography>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <TextField fullWidth id="length" label="Length" variant="outlined" />
        </Grid>
        <Grid item md={4}>
          <TextField fullWidth id="width" label="Width" variant="outlined" />
        </Grid>
        <Grid item md={4}>
          <TextField fullWidth id="height" label="Height" variant="outlined" />
        </Grid>
        <Grid item md={6}>
          <TextField fullWidth id="pounds" label="Pounds(lb)" variant="outlined" />
        </Grid>
        <Grid item md={6}>
          <TextField fullWidth id="ounces" label="Ounces(oz)" variant="outlined" />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default MetricsForm
