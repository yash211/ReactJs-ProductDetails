import { Button, Typography } from '@mui/material'
import { Routes, Route, Link } from "react-router-dom";
import React, { useState } from 'react'
import DetailsForm from './DetailsForm';
import ShowProds from './ShowProds';

const Home = (props) => {
  //console.log(props.user);
  // const gotoForm=(e)=>{
  //   //console.log("gyg");
  //   e.preventDefault();
  //   <DetailsForm/>
  // }
  const [prodDetail,setproDetails]=useState([])
  const [OnAdd,setOnAdd]=useState("");
  const OnLogout=()=>{
    props.logout();
  }
  
  return (
    <div>
      <div className="header">
        <h1>Welcome,{props.user[0]}</h1>
        <Button sx={{float:"right",marginTop:1}}
        onClick={OnLogout} color="error">Log Out</Button>
      </div>
      {
        (prodDetail.length===0)?<Typography color="alert" variant="caption">No records found</Typography>:<ShowProds/>
      }
      <br></br>
      <Button onClick={()=>{setOnAdd(true)}}>Add Details</Button>
      {
        (OnAdd!="")?<DetailsForm/>:""
      }
    </div>
  )
}

export default Home
