import React from "react"

import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import Button from "@mui/material/Button"
import SaveAltIcon from "@mui/icons-material/SaveAlt"

const Item = (props) => {
  const { carrier, service, fromName, toName } = props
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {carrier}
      </TableCell>
      <TableCell>{service}</TableCell>
      <TableCell>
        ({fromName} to {toName})
      </TableCell>
      <TableCell align="right">
        <Button variant="outlined" endIcon={<SaveAltIcon />}>
          Save
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default Item
