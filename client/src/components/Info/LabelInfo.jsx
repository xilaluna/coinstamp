import React from "react"

import Grid from "@mui/material/Grid"
import LabelAddress from "./LabelAddress"

const LabelInfo = () => {
  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item md={6}>
          <LabelAddress
            header={"From"}
            name={"John Doe"}
            street1={"417 montgomery street"}
            street2={"None"}
            city={"San Francisco"}
            state={"CA"}
            zip={"94104"}
            country={"US"}
            phone={"None"}
          />
        </Grid>
        <Grid item md={6}>
          <LabelAddress
            header={"To"}
            name={"George Costanza"}
            street1={"1 E 161st St."}
            street2={"None"}
            city={"New York"}
            state={"NY"}
            zip={"10451"}
            country={"US"}
            phone={"None"}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default LabelInfo
