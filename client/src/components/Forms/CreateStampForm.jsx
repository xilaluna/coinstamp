import React, { useState } from "react"

import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Typography from "@mui/material/Typography"
import InputAdornment from "@mui/material/InputAdornment"
import Button from "@mui/material/Button"

import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { createStamp } from "../../redux/slices/stampSlice"

const CreateStampForm = () => {
  const [formData, setFormData] = useState({
    fromName: "",
    fromStreet1: "",
    fromStreet2: "",
    fromCity: "",
    fromState: "",
    fromZip: "",
    fromCountry: "",
    fromPhone: "",

    toName: "",
    toStreet1: "",
    toStreet2: "",
    toCity: "",
    toState: "",
    toZip: "",
    toCountry: "",
    toPhone: "",

    packageType: "",
    packageLength: "",
    packageWidth: "",
    packageHeight: "",
    packageWeightPounds: 0,
    packageWeightOunces: 0,
    packageWeightTotal: 0,

    delivery_confirmation: "",
  })

  let navigate = useNavigate()

  const dispatch = useDispatch()
  async function handleSubmit(e) {
    e.preventDefault()
    await dispatch(createStamp(formData))
    navigate("/rates")
  }
  return (
    <form noValidate onSubmit={handleSubmit}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          {/* carrier info form  -----------------------------------------------------------------------------------*/}

          <Typography variant="h5" gutterBottom>
            Carrier Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <FormControl fullWidth>
                <InputLabel id="carrier-select-label">Carrier</InputLabel>
                <Select
                  labelId="carrier-select-label"
                  id="carrier-select"
                  label="Carrier"
                  value={10}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <FormControl fullWidth>
                <InputLabel id="carrier-select-label">Package Type</InputLabel>
                <Select
                  labelId="carrier-select-label"
                  id="carrier-select"
                  label="Package Type"
                  value={10}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {/* metrics form  -----------------------------------------------------------------------------------*/}

          <Typography variant="h5" gutterBottom>
            Dimensions & Weight
          </Typography>
          <Grid container spacing={2}>
            <Grid item md={4}>
              <TextField
                fullWidth
                id="length"
                label="Length"
                variant="outlined"
                value={formData.packageLength}
                onChange={(e) =>
                  setFormData({ ...formData, packageLength: e.target.value })
                }
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                fullWidth
                id="width"
                label="Width"
                variant="outlined"
                value={formData.packageWidth}
                onChange={(e) =>
                  setFormData({ ...formData, packageWidth: e.target.value })
                }
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                fullWidth
                id="height"
                label="Height"
                variant="outlined"
                value={formData.packageHeight}
                onChange={(e) =>
                  setFormData({ ...formData, packageHeight: e.target.value })
                }
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                id="pounds"
                label="Pounds"
                InputProps={{
                  endAdornment: <InputAdornment position="end">lb</InputAdornment>,
                }}
                variant="outlined"
                type="number"
                value={formData.packageWeightPounds}
                onChange={(e) =>
                  setFormData({ ...formData, packageWeightPounds: e.target.value })
                }
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                id="ounces"
                label="Ounces"
                variant="outlined"
                type="number"
                value={formData.packageWeightOunces}
                InputProps={{
                  endAdornment: <InputAdornment position="end">oz</InputAdornment>,
                }}
                onChange={(e) =>
                  setFormData({ ...formData, packageWeightOunces: e.target.value })
                }
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          {/* from address form  -----------------------------------------------------------------------------------*/}
          <Typography variant="h5" gutterBottom>
            From
          </Typography>
          <Grid container spacing={2} columns={20}>
            <Grid item md={20}>
              <TextField
                fullWidth
                id="fromCountry"
                label="Country"
                variant="outlined"
                value={formData.fromCountry}
                onChange={(e) =>
                  setFormData({ ...formData, fromCountry: e.target.value })
                }
              />
            </Grid>
            <Grid item md={20}>
              <TextField
                fullWidth
                id="fromName"
                label="Name"
                variant="outlined"
                value={formData.fromName}
                onChange={(e) => setFormData({ ...formData, fromName: e.target.value })}
              />
            </Grid>
            <Grid item md={16}>
              <TextField
                fullWidth
                id="fromStreet1"
                label="Address"
                variant="outlined"
                value={formData.fromStreet1}
                onChange={(e) =>
                  setFormData({ ...formData, fromStreet1: e.target.value })
                }
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                fullWidth
                id="fromStreet2"
                label="Apt/Suite"
                variant="outlined"
                value={formData.fromStreet2}
                onChange={(e) =>
                  setFormData({ ...formData, fromStreet2: e.target.value })
                }
              />
            </Grid>
            <Grid item md={10}>
              <TextField
                fullWidth
                id="fromCity"
                label="City"
                variant="outlined"
                value={formData.fromCity}
                onChange={(e) => setFormData({ ...formData, fromCity: e.target.value })}
              />
            </Grid>
            <Grid item md={5}>
              <TextField
                fullWidth
                id="fromState"
                label="State"
                variant="outlined"
                value={formData.fromState}
                onChange={(e) => setFormData({ ...formData, fromState: e.target.value })}
              />
            </Grid>
            <Grid item md={5}>
              <TextField
                fullWidth
                id="fromZip"
                label="Zip"
                variant="outlined"
                value={formData.fromZip}
                onChange={(e) => setFormData({ ...formData, fromZip: e.target.value })}
              />
            </Grid>
            <Grid item md={20}>
              <TextField
                fullWidth
                id="fromPhone"
                label="Phone"
                variant="outlined"
                value={formData.fromPhone}
                onChange={(e) => setFormData({ ...formData, fromPhone: e.target.value })}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          {/* to address form  -----------------------------------------------------------------------------------*/}
          <Typography variant="h5" gutterBottom>
            To
          </Typography>
          <Grid container spacing={2} columns={20}>
            <Grid item md={20}>
              <TextField
                fullWidth
                id="toCountry"
                label="Country"
                variant="outlined"
                value={formData.toCountry}
                onChange={(e) => setFormData({ ...formData, toCountry: e.target.value })}
              />
            </Grid>
            <Grid item md={20}>
              <TextField
                fullWidth
                id="toName"
                label="Name"
                variant="outlined"
                value={formData.toName}
                onChange={(e) => setFormData({ ...formData, toName: e.target.value })}
              />
            </Grid>
            <Grid item md={16}>
              <TextField
                fullWidth
                id="toStreet1"
                label="Address"
                variant="outlined"
                value={formData.toStreet1}
                onChange={(e) => setFormData({ ...formData, toStreet1: e.target.value })}
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                fullWidth
                id="toStreet2"
                label="Apt/Suite"
                variant="outlined"
                value={formData.toStreet2}
                onChange={(e) => setFormData({ ...formData, toStreet2: e.target.value })}
              />
            </Grid>
            <Grid item md={10}>
              <TextField
                fullWidth
                id="toCity"
                label="City"
                variant="outlined"
                value={formData.toCity}
                onChange={(e) => setFormData({ ...formData, toCity: e.target.value })}
              />
            </Grid>
            <Grid item md={5}>
              <TextField
                fullWidth
                id="toState"
                label="State"
                variant="outlined"
                value={formData.toState}
                onChange={(e) => setFormData({ ...formData, toState: e.target.value })}
              />
            </Grid>
            <Grid item md={5}>
              <TextField
                fullWidth
                id="toZip"
                label="Zip"
                variant="outlined"
                value={formData.toZip}
                onChange={(e) => setFormData({ ...formData, toZip: e.target.value })}
              />
            </Grid>
            <Grid item md={20}>
              <TextField
                fullWidth
                id="toPhone"
                label="Phone"
                variant="outlined"
                value={formData.toPhone}
                onChange={(e) => setFormData({ ...formData, toPhone: e.target.value })}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item md={4}>
              <FormControl fullWidth>
                <InputLabel id="delivery-confirmation-select">
                  Delivery Confirmation
                </InputLabel>
                <Select
                  labelId="delivery-confirmation-select"
                  id="signature-select"
                  value={formData.delivery_confirmation}
                  label="Delivery Confirmation"
                  onChange={(e) =>
                    setFormData({ ...formData, delivery_confirmation: e.target.value })
                  }
                >
                  <MenuItem value={"NO_SIGNATURE"}>No Signature</MenuItem>
                  <MenuItem value={"SIGNATURE"}>Signature</MenuItem>
                  <MenuItem value={"ADULT_SIGNATURE"}>Adult Signature</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              md={8}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Button variant="contained" size="large" type="submit">
                Calculate Rates
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  )
}

export default CreateStampForm
