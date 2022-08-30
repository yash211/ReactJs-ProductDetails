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
  
  const [errors,setError]=useState({
    EmailError:"",
    PassError:"",
    Cpass:"",
  });
  
  const submitDetails=(e)=>{
    e.preventDefault();
    props.add(userdet);
  }

  const validEmail=RegExp('^[a-zA-Z0-9]+@[a-zA-Z]+[.a-zA-Z]+$');
  const validPass=RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/);

  //handle change
  const handleInput=(e)=>{
    setUserdet({...userdet,[e.target.name]:e.target.value});
    if(e.target.name==="email"){
      if(!validEmail.test(userdet.email)){
        setError({...errors,EmailError:"Email is incorrect"})
      }else{
        setError({...errors,EmailError:""})
      }
    }
    else if(e.target.name==="password"){
      if(!validPass.test(userdet.password)){
        setError({...errors,PassError:"Password is incorrect"})
      }else{
        setError({...errors,PassError:""})
      }
    }else{
      if(userdet.password===userdet.confirmPassword){
        setError({...errors,Cpass:""})
        
      }else{
        setError({...errors,Cpass:"Confirm Password and Password should be same"}) 
      }
    }
    //console.log(errors);
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
              <Typography variant="string" color="error">{errors.EmailError}</Typography>
            </Grid>
            <Grid item sm={12} xs={6}>
              <TextField fullWidth variant="filled" type="password" label="Password" value={userdet.password} onChange={handleInput} name="password" required/>
              <Typography variant="string" color="error">{errors.PassError}</Typography>
            </Grid>
            <Grid item sm={12} xs={6}>
              <TextField fullWidth variant="standard" type="password" label="ConfrimPassword" value={userdet.confirmPassword} onChange={handleInput} name="confirmPassword" required/>
              <Typography variant="string" color="error">{errors.Cpass}</Typography>
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