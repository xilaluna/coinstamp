import React from "react"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import Button from "@mui/material/Button"
import AddCircleIcon from "@mui/icons-material/AddCircle"

import { useNavigate } from "react-router-dom"

import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/slices/cartSlice"

const Item = (props) => {
  const { id, carrier, service, delivery_days, rate } = props
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addToCart(id))
    navigate("/cart")
  }

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {service}
      </TableCell>
      <TableCell>{carrier}</TableCell>
      <TableCell>{delivery_days} Business Days</TableCell>
      <TableCell>${rate}</TableCell>
      <TableCell align="right">
        <Button variant="outlined" endIcon={<AddCircleIcon />} onClick={handleClick}>
          Add to Cart
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default Item
