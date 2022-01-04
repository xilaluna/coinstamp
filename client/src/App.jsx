import React from "react"
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Container from "@mui/material/Container"

import Home from "./pages/Home/Home"
import Rates from "./pages/Rates/Rates"
import Cart from "./pages/Cart/Cart"
import Order from "./pages/Order/Order"
import Create from "./pages/Create/Create"

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="rates" element={<Rates />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<Order />} />
        </Routes>
      </Container>
      <Footer />
    </React.Fragment>
  )
}

export default App
