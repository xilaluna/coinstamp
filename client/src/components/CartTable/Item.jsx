import React from "react"

import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import IconButton from "@mui/material/IconButton"

import ImageIcon from "@mui/icons-material/Image"
import DeleteIcon from "@mui/icons-material/Delete"

const Item = (props) => {
  const { carrier, service, fromName, toName, rate } = props
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        <ImageIcon />
      </TableCell>
      <TableCell>{carrier}</TableCell>
      <TableCell>{service}</TableCell>
      <TableCell>
        ({fromName} to {toName})
      </TableCell>
      <TableCell>${rate}</TableCell>
      <TableCell align="right">
        <IconButton color="primary">
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

export default Item
