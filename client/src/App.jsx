import React from "react"
import { Outlet } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Container from "@mui/material/Container"

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container maxWidth="lg">
        <Outlet />
      </Container>
      <Footer />
    </React.Fragment>
  )
}

export default App
