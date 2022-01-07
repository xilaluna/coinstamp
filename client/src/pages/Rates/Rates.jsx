import React from "react"

import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Container from "@mui/material/Container"

import RateTable from "../../components/RateTable/RateTable"
import LabelSummary from "../../components/LabelSummary/LabelSummary"

const PaperStyles = {
  p: 4,
}

const Rates = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper sx={PaperStyles}>
            <LabelSummary />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={PaperStyles}>
            <RateTable />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Rates
