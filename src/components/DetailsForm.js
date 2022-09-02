import {Button,ListItemIcon,Box,ListItemText, InputLabel, Container, Typography, Grid, TextField, RadioGroup, FormLabel, FormControlLabel, Radio, Checkbox, Select, MenuItem, OutlinedInput} from '@mui/material';
import { useState } from 'react';
import axios from 'axios';


const DetailsForm = (props) => {
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
  ];

  //const [RadioSelect,setRadioSelect]=useState("")
  const [prodDetails,setprodDetails]=useState([]);
  
  const [check,setfcheck]=useState(false)
  const [selected,setSelect]=useState([])
  const handleCheckbox=(e)=>{
    setSelect(e.target.value);
    setprodDetails({...prodDetails,pitems:selected});
    console.log(selected);
  }

  const submitDetails=(e)=>{
    e.preventDefault();
    setprodDetails(prodDetails);
    axios.post('http://localhost:3030/products',prodDetails);
    props.addDetails(prodDetails);
    setprodDetails([]);
  }
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop:4,
          alignItems:"center",
        }}
      >
         <Typography variant='h4' color="success">Add Details</Typography>
        <form onSubmit={submitDetails}>
         <Grid container spacing={3}>
            <Grid item sm={12} xs={6}>
              <TextField fullWidth variant="outlined" value={prodDetails.name} onChange={(e)=>setprodDetails({...prodDetails,name:e.target.value})} label="Company Name" required/>
            </Grid>
            <Grid item sm={12} xs={6}>
              <TextField fullWidth type="number" variant="outlined" value={prodDetails.price} onChange={(e)=>setprodDetails({...prodDetails,price:e.target.value})} label="Price" required/>
            </Grid>    
            <Grid item sm={12} xs={6}>
              <InputLabel id="demo-simple-select-label">Product Types</InputLabel>
              <Select
                 fullWidth
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 value={prodDetails.ptype}
                 onChange={(e)=>{setprodDetails({...prodDetails,ptype:e.target.value})}}
                 label="Age"
                 >
              {
                products.map((p,index) => {
                   return (
                    <MenuItem value={p.type}
                    >{p.type}</MenuItem>
                   )
                })
              }
             </Select> 
            </Grid>
            <Grid item sm={12} xs={6}>
            {
              products.map((product)=>{   
                return(
                  <div>
                    {
                      (product.type==prodDetails.ptype)?
                      
                        <Grid item sm={12} xs={6}>
                        <InputLabel id="demo-multiple-checkbox-label">{product.type}</InputLabel>
                        <Select
                          labelId="demo-multiple-checkbox-label"
                          id="demo-multiple-checkbox"
                          fullWidth
                          multiple
                          value={selected}   
                          onChange={handleCheckbox}       
                          input={<OutlinedInput label={product.type} />}
                          renderValue={(selected) => selected.join(', ')}
                          // MenuProps={MenuProps}
                        >
                          {product.prods.map((name) => (
                            <MenuItem key={name} value={name}>
                              <ListItemIcon>
                                  <Checkbox checked={selected.indexOf(name) > -1} />
                              </ListItemIcon>
                              <ListItemText primary={name} />
                              
                            </MenuItem>
                          ))}
                        </Select>
                        </Grid>
                      
                      :""
                    }
                  </div>
                )
              })
            }
            </Grid>  
            <Grid>
              <Button sx={{
                marginTop:2,
                marginLeft:27,
              }}
              variant="contained" color="success" type="submit">Submit Details</Button>
           
            </Grid>
            
         </Grid>
        </form>
      </Box>
    </Container>
  )
}



export default DetailsForm

