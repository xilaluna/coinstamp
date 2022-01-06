import React from "react"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"

const AddressForm = (props) => {
  const { header } = props
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        {header}
      </Typography>
      <Grid container spacing={2} columns={20}>
        <Grid item md={20}>
          <TextField fullWidth id="country" label="Country" variant="outlined" />
        </Grid>
        <Grid item md={20}>
          <TextField fullWidth id="name" label="Name" variant="outlined" />
        </Grid>
        <Grid item md={16}>
          <TextField fullWidth id="street1" label="Address" variant="outlined" />
        </Grid>
        <Grid item md={4}>
          <TextField fullWidth id="street2" label="Apt/Suite" variant="outlined" />
        </Grid>
        <Grid item md={10}>
          <TextField fullWidth id="city" label="City" variant="outlined" />
        </Grid>
        <Grid item md={5}>
          <TextField fullWidth id="state" label="State" variant="outlined" />
        </Grid>
        <Grid item md={5}>
          <TextField fullWidth id="zip" label="Zip" variant="outlined" />
        </Grid>
        <Grid item md={20}>
          <TextField fullWidth id="phone" label="Phone" variant="outlined" />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default AddressForm
