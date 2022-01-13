import React from "react"

import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"

const LabelAddress = (props) => {
  const { header, name, street1, street2, city, zip, state, country, phone } = props
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        {header}
      </Typography>
      <Stack spacing={1.5} sx={{ px: 2.5 }}>
        <Typography>{name}</Typography>
        {street2 ? (
          <Typography>{`${street1}, ${street2}`}</Typography>
        ) : (
          <Typography>{`${street1}`}</Typography>
        )}

        <Typography>{`${city}, ${state}, ${zip}`}</Typography>
        <Typography>{country}</Typography>
        <Typography>{phone}</Typography>
      </Stack>
    </React.Fragment>
  )
}

export default LabelAddress
