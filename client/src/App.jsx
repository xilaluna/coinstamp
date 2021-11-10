import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import { CssBaseline } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const theme = createTheme()

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main></main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
