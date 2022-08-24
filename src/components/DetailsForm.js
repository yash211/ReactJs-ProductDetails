<<<<<<< HEAD
import { Box, Container, Typography, Grid, TextField, RadioGroup, FormLabel, FormControlLabel, Radio} from '@mui/material';
import React from 'react'

const DetailsForm = () => {
    //console.log("rbfhrb");
  const products=[
    {
      type:"Electronics",
      prods:["Laptop","Washing Machine","Desktop","Printer"],
    },{
      type:"Sports",
      prods:["Tennis bat","Cricket bat","Cricket ball"],
    },
    {
      type:"Clothes",
      prods:["T-Shirts","Pants","Shirts"],
    }
  ]
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          alignItems:"center",
        }}
      >
         <Typography variant='h4' color="success">Add Details</Typography>
         <Grid container spacing={3}>
            <Grid item sm={12} xs={6}>
              <TextField fullWidth variant="outlined" label="Company Name" required/>
            </Grid>
            <Grid item sm={12} xs={6}>
              <TextField fullWidth type="number" variant="outlined" label="Price" required/>
            </Grid>
            <Grid item sm={12} xs={6}>
              <FormLabel id="demo-radio-buttons-group-label">Products Type</FormLabel>
              <RadioGroup
                 aria-labelledby="demo-controlled-radio-buttons-group"
                 name="controlled-radio-buttons-group"
                 value=""
                 >
              {
                products.map((p,index) => {
                   return (
                    <FormControlLabel value={p.type} control={<Radio />} label={p.type} />
                   )
                })
              }
              </RadioGroup>
            </Grid>
         </Grid>
      
      </Box>
    </Container>
=======
import React from 'react'

const DetailsForm = () => {
    console.log("rbfhrb");
  return (
    <div>
      <h1>In Add Product Details Form</h1>
    </div>
>>>>>>> d862b82f25a789ccbdc5c551679f42f30573bd7a
  )
}

export default DetailsForm
