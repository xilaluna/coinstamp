import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Container from "@mui/material/Container"

import Landing from "./pages/Landing/Landing"
import Rates from "./pages/Rates/Rates"
import Cart from "./pages/Cart/Cart"
import Order from "./pages/Order/Order"

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container maxWidth="lg">
        <Landing />
        <Rates />
        <Cart />
        <Order />
      </Container>
      <Footer />
    </React.Fragment>
  )
}

export default App
