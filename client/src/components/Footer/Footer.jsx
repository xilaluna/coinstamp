import React from "react"
import { Container, Grid, Link } from "@mui/material"
import Copyright from "./Copyright"

const Footer = () => {
  return (
    <Container
      maxWidth="md"
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: 8,
        py: [3, 6],
      }}
    >
      <Grid container spacing={4} justifyContent="space-evenly">
        <Grid item xs={2} align="center">
          <Link href="#" variant="subtitle1" color="text.secondary">
            Home
          </Link>
        </Grid>
        <Grid item xs={2} align="center">
          <Link href="#" variant="subtitle1" color="text.secondary">
            Features
          </Link>
        </Grid>
        <Grid item xs={2} align="center">
          <Link href="#" variant="subtitle1" color="text.secondary">
            Pricing
          </Link>
        </Grid>
        <Grid item xs={2} align="center">
          <Link href="#" variant="subtitle1" color="text.secondary">
            FAQs
          </Link>
        </Grid>
        <Grid item xs={2} align="center">
          <Link href="#" variant="subtitle1" color="text.secondary">
            About
          </Link>
        </Grid>
      </Grid>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  )
}

export default Footer
