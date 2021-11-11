import React from "react"
import { Card, Grid, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material"

const CarrierForm = () => {
  return (
    <Grid item xs={12} sm={6} md={12}>
      <Card>
        <CardMedia
          component="img"
          sx={{
            // 16:9
            pt: "56.25%",
          }}
          image="https://source.unsplash.com/random"
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            Heading
          </Typography>
          <Typography>
            This is a media card. You can use this section to describe the content.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View</Button>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default CarrierForm
