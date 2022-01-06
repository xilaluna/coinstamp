import React from "react"

import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Divider from "@mui/material/Divider"

const Summary = () => {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Summary
      </Typography>
      <Stack spacing={2}>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Typography>Subtotal</Typography>
          <Typography>$9.00</Typography>
        </Stack>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Typography>Service Fee</Typography>
          <Typography>$2.00</Typography>
        </Stack>
        <Divider />
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Typography>Order Total</Typography>
          <Typography>$11.00</Typography>
        </Stack>
        <Button variant="contained">Checkout</Button>
      </Stack>
    </React.Fragment>
  )
}

export default Summary
