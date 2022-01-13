import React, { useEffect } from "react"

import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Container from "@mui/material/Container"

import RateTable from "../../components/RateTable/RateTable"
import LabelSummary from "../../components/LabelSummary/LabelSummary"

import { useDispatch } from "react-redux"
import { getAddresses } from "../../redux/slices/stampSlice"
import { useSelector } from "react-redux"

const PaperStyles = {
  p: 4,
}

const Rates = () => {
  const shipment = useSelector((state) => state.stamp.shipment)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      getAddresses({
        to_address: shipment.to_address.id,
        from_address: shipment.from_address.id,
      })
    )
  }, [shipment.from_address, shipment.to_address, dispatch])
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
