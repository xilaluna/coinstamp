import React from "react"
import { Link as RouterLink } from "react-router-dom"

import Grid from "@mui/material/Grid"
import Select from "@mui/material/Select"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Button from "@mui/material/Button"

const SubmitForm = () => {
  const [signature, setSignature] = React.useState("")

  const handleSignatureChange = (event) => {
    setSignature(event.target.value)
  }
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <FormControl fullWidth size="small">
            <InputLabel id="signature-select-label">Signature</InputLabel>
            <Select
              labelId="signature-select-label"
              id="signature-select"
              value={signature}
              label="Signature"
              onChange={handleSignatureChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid
          item
          md={8}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Button component={RouterLink} to="/rates" variant="contained">
            Calculate Rates
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default SubmitForm
