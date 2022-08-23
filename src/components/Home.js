import { Button } from '@mui/material'
import { Routes, Route, Link } from "react-router-dom";
import React, { useState } from 'react'
import DetailsForm from './DetailsForm';

const Home = (props) => {
  //console.log(props.user);
  // const gotoForm=(e)=>{
  //   //console.log("gyg");
  //   e.preventDefault();
  //   <DetailsForm/>
  // }

  const [OnAdd,setOnAdd]=useState("");
  const OnLogout=()=>{
    props.logout();
  }
  
  return (
    <div>
      <div className="header">
        <h1>Welcome,{props.user[0]}</h1>
        <Button onClick={OnLogout} color="error">Log Out</Button>
      </div>
      <Button onClick={()=>{setOnAdd(true)}}>Add Details</Button>
      {
        (OnAdd!="")?<DetailsForm/>:""
      }
    </div>
  )
}

export default Home
