import { createTheme } from "@mui/material/styles"

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#19857b",
    },
    text: {
      disabled: "#000000",
    },
    background: {
      default: "#eeee",
      paper: "#ffff",
    },
  },
})

export default theme
