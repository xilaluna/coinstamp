import React from "react"
import { Link as RouterLink } from "react-router-dom"

import { ShoppingCart } from "@mui/icons-material"

import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Button from "@mui/material/Button"
import Badge from "@mui/material/Badge"
import Container from "@mui/material/Container"

import { useSelector } from "react-redux"

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart)

  return (
    <AppBar position="relative" sx={{ mb: 4 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Link
            component={RouterLink}
            to="/"
            variant="h6"
            color="inherit"
            underline="none"
          >
            CoinStamp
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          <Button component={RouterLink} to="/create" color="inherit">
            Create Label
          </Button>

          <IconButton component={RouterLink} to="/cart" size="large" color="inherit">
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
