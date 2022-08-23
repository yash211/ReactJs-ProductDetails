import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Paper, Alert, Button, Container, FormControl, Grid, Input, TextField, Typography } from '@mui/material';

const LoginForm = (props) => {

  const [userdet,setUserdet]=useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
  });

  const submitDetails=(e)=>{
    //console.log("I am here");
    e.preventDefault();
    props.add(userdet);
  }


  return (
    <Container maxWidth="xs">
      <Paper 
        sx={{
          alignItems:"center",
          backgroundColor:"white",
          marginTop:25,
        }}
      >
        <Typography align='center' variant='h4' color="error">Sign In</Typography>
        <form onSubmit={e=>{submitDetails(e)}} style={{marginTop:2}}>
          <Grid container spacing={2}>
            <Grid item sm={12} xs={6}>
                <TextField fullWidth variant="outlined" label="First Name" value={userdet.name} onChange={(e)=>setUserdet({...userdet,name:e.target.value})} required/>
            </Grid>
            <Grid item sm={12} xs={6}>
              <TextField fullWidth variant="outlined" label="Email" value={userdet.email} onChange={(e)=>setUserdet({...userdet,email:e.target.value})} required/>
              {
                (props.err.EmailError!=="")?<Alert severity="error">{props.err[0]}</Alert>:""
              }
            </Grid>
            <Grid item sm={12} xs={6}>
              <TextField fullWidth variant="filled" label="Password" value={userdet.password} onChange={(e)=>setUserdet({...userdet,password:e.target.value})} required/>
              {
                (props.err.PassError!=="")?<Alert severity="error">{props.err[1]}</Alert>:""
              }
            </Grid>
            <Grid item sm={12} xs={6}>
              <TextField fullWidth variant="standard" label="ConfrimPassword" value={userdet.confirmPassword} onChange={(e)=>setUserdet({...userdet,confirmPassword:e.target.value})} required/>
              {
                (props.err.Cpass!=="")?<Alert severity="error">{props.err[2]}</Alert>:""
              }
            </Grid>
            <Button sx={{
              marginTop:2,
              marginLeft:20,
              alignItems:"center",

            }}
            variant="contained" color="success" type="submit">Sign In</Button>
           </Grid> 
        </form>
        </Paper>
    </Container>
  )
}

export default LoginForm
