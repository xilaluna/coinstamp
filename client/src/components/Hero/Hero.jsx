import React from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

const Hero = () => {
  return (
    <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        CoinStamp
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" component="p">
        Abandon traditional methods of payment with Coinstamp. Use decentralized
        currencies to buy and print your postage today.
      </Typography>
    </Container>
  )
}

export default Hero
