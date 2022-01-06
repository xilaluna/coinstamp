import React from "react"

import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"

const PaperStyles = {
  p: 4,
}

const Rates = () => {
  return (
    <React.Fragment>
      <Grid container spacing={4} sx={{ my: 2 }}>
        <Grid item xs={12}>
          <Paper sx={PaperStyles}> Hello </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={PaperStyles}> Hello </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Rates
