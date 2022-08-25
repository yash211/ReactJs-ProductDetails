
import {Button, Box, Container, Typography, Grid, TextField, RadioGroup, FormLabel, FormControlLabel, Radio, Checkbox} from '@mui/material';
import { useState } from 'react';


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
  const [prodDetails,setprodDetails]=useState([{
    name:"",
    price:0,
    ptype:"",
    pitems:[],
  }]);
  
  const [checked,setCheck]=useState([])
  const handleCheckbox=(e)=>{
    var newList=[...checked];
    //console.log(newList);
    if(e.target.checked){
       newList=[...checked,e.target.value];
    }else{
      newList.splice(checked.indexOf(e.target.value),1);
    }
    setCheck(newList);
    console.log(checked);
    setprodDetails({...prodDetails,pitems:checked});
  }

  const submitDetails=(e)=>{
    e.preventDefault();
    setprodDetails(prodDetails);
    props.addDetails(prodDetails);
  }
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
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
              <FormLabel id="demo-radio-buttons-group-label">Products Type</FormLabel>
              <RadioGroup
                 aria-labelledby="demo-controlled-radio-buttons-group"
                 name="controlled-radio-buttons-group"
                //  value={products.type}
                 >
              {
                products.map((p,index) => {
                   return (
                    <FormControlLabel value={p.type} onChange={(e)=>setprodDetails({...prodDetails,ptype:e.target.value})} control={<Radio />} label={p.type} />
                   )
                })
              }
              </RadioGroup>
            </Grid>
            <Grid items sm={12}>
            <FormLabel id="demo--buttons-group-label">Items</FormLabel>
              {
                // products.map((p)=>{
                //   var req=[];
                //    if(p.type=="Sports"){
                //     const items=p.prods;
                //     req=items.map((item)=>{
                //        <Checkbox label={item}/>
                //     })            
                //    }
                //   return req;
                // })
                // (products.type==RadioSelect)?products.prods
                products.map((product)=>{
                  
                  return(
                    <div>
                      {
                        (product.type==prodDetails.ptype)?product.prods.map((items,index)=>{
                          return(
                            <div key={index}>
                               <FormControlLabel control={<Checkbox  />} value={items} onChange={handleCheckbox} label={items} />
                            </div>
                          )
                        }):""
                      }
                    </div>
                  )
                })
              }
            </Grid>
            <Grid>
              <Button sx={{
                marginTop:2,
                alignText:"center"
                

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
