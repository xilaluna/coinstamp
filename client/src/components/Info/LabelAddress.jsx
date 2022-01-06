import React from "react"

import Typography from "@mui/material/Typography"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Grid from "@mui/material/Grid"

const LabelAddress = (props) => {
  const { header, name, street1, street2, city, zip, state, country, phone } = props
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        {header}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <List>
            <ListItem>
              <ListItemText primary={name} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`${street1}, ${street2}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`${city}, ${state}, ${zip}`} />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={6}>
          <List>
            <ListItem>
              <ListItemText primary={country} />
            </ListItem>
            <ListItem>
              <ListItemText primary={phone} />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default LabelAddress
