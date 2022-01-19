import React from "react"

import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Container from "@mui/material/Container"

import RateTable from "../../components/RateTable/RateTable"
import LabelSummary from "../../components/LabelSummary/LabelSummary"

import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { getStamp } from "../../redux/slices/stampSlice"

const PaperStyles = {
  p: 4,
}

const Rates = () => {
  const { stamp, status } = useSelector((state) => state.stamp)
  const dispatch = useDispatch()
  if (status === "idle") {
    dispatch(getStamp())
  }
  return (
    <Container maxWidth="md">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper sx={PaperStyles}>
            <LabelSummary
              to_address={stamp.to_address}
              from_address={stamp.from_address}
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={PaperStyles}>
            <RateTable rates={stamp.rates} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Rates
