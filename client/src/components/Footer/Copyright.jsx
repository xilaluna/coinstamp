import React from "react"
import { Typography, Link } from "@mui/material"

const Copyright = (props) => {
  return (
    <Typography variant="body1" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        CoinStamp
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

export default Copyright
