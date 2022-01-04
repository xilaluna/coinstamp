import React from "react"
import { Link } from "react-router-dom"
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Badge,
  Container,
} from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"

const Navbar = () => {
  return (
    <AppBar position="relative">
      <Container maxWidth="lg" disableGutters>
        <Toolbar disableGutters>
          <Link to="/">
            <Typography variant="h6">CoinStamp</Typography>
          </Link>
          <Link to="/rates">Rates</Link>
          <Link to="/order">Order</Link>

          <Box sx={{ flexGrow: 1 }} />
          <Link to="/create">
            <Button color="inherit">New Label</Button>
          </Link>
          <Link to="/cart">
            <IconButton size="large" color="inherit">
              <Badge badgeContent={0} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
