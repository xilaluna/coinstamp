import React from "react"
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6">CoinStamp</Typography>

            <Box sx={{ flexGrow: 1 }} />

            <Button color="inherit">New Label</Button>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Navbar
