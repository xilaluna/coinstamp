import React from "react"
import Paper from "@mui/material/Paper"
import Container from "@mui/material/Container"
import CreateStampForm from "../../components/Forms/CreateStampForm"

const Create = () => {
  return (
    <Container maxWidth="lg">
      <Paper sx={{ p: 4 }}>
        <CreateStampForm />
      </Paper>
    </Container>
  )
}

export default Create
