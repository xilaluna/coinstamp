import React from "react"
import {
  Card,
  Container,
  Grid,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material"
import CarrierForm from "./Forms/CarrierForm"

const Form = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        <CarrierForm />
      </Grid>
    </Container>
  )
}

export default Form
