import React from "react"

import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Container from "@mui/material/Container"

import RateList from "../../components/Rate/RateList"
import LabelInfo from "../../components/Info/LabelInfo"

const PaperStyles = {
  p: 4,
}

const Rates = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper sx={PaperStyles}>
            <LabelInfo />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={PaperStyles}>
            <RateList />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Rates
