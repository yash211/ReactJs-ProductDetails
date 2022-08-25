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
    var emailerror="",passerror="",cpasserror="";
    const validEmail=RegExp('^[a-zA-Z0-9]+@[a-zA-Z]+[.a-zA-Z]+$');
    const validPass=RegExp('^[0-9]');
    if(!validEmail.test(userdet.email)){
        emailerror="Email is incorrect";
    }
    if(!validPass.test(userdet.password) || userdet.password.length>6){
      passerror="Password is Incorrect";
    }
    if(userdet.password!==userdet.confirmPassword){
      cpasserror="Confirm Password and Password should be same";
    }
    props.add(userdet,emailerror,passerror,cpasserror);
  }

  //handle change
  const handleInput=(e)=>{
    setUserdet({...userdet,[e.target.name]:e.target.value});
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
                <TextField fullWidth variant="outlined" label="First Name" value={userdet.name} onChange={handleInput} name="name" required/>
            </Grid>
            <Grid item sm={12} xs={6}>
              <TextField fullWidth variant="outlined" label="Email" value={userdet.email} onChange={handleInput} name="email" required/>
              {
                (props.err.EmailError!=="")?<Alert severity="error">{props.err[0]}</Alert>:""
              }
            </Grid>
            <Grid item sm={12} xs={6}>
              <TextField fullWidth variant="filled" label="Password" value={userdet.password} onChange={handleInput} name="password" required/>
              {
                (props.err.PassError!=="")?<Alert severity="error">{props.err[1]}</Alert>:""
              }
            </Grid>
            <Grid item sm={12} xs={6}>
              <TextField fullWidth variant="standard" label="ConfrimPassword" value={userdet.confirmPassword} onChange={handleInput} name="confirmPassword" required/>
              {
                (props.err.Cpass!=="")?<Alert severity="error">{props.err.Cpass}</Alert>:""
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
