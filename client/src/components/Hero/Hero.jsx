import React from "react"
import { Container, Typography } from "@mui/material"

const Hero = () => {
  return (
    <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
      <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
        CoinStamp
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" component="p">
        Quickly buy and print postage online at the click of button. CoinStamp offers a non
        traditional method of payment by using decentralized currencies.
      </Typography>
    </Container>
  )
}

export default Hero
