<<<<<<< HEAD
import { Button, Typography } from '@mui/material'
import { Routes, Route, Link } from "react-router-dom";
import React, { useState } from 'react'
import DetailsForm from './DetailsForm';
import ShowProds from './ShowProds';
=======
import { Button } from '@mui/material'
import { Routes, Route, Link } from "react-router-dom";
import React, { useState } from 'react'
import DetailsForm from './DetailsForm';
>>>>>>> d862b82f25a789ccbdc5c551679f42f30573bd7a

const Home = (props) => {
  //console.log(props.user);
  // const gotoForm=(e)=>{
  //   //console.log("gyg");
  //   e.preventDefault();
  //   <DetailsForm/>
  // }
<<<<<<< HEAD
  const [prodDetail,setproDetails]=useState([])
=======

>>>>>>> d862b82f25a789ccbdc5c551679f42f30573bd7a
  const [OnAdd,setOnAdd]=useState("");
  const OnLogout=()=>{
    props.logout();
  }
  
  return (
    <div>
      <div className="header">
        <h1>Welcome,{props.user[0]}</h1>
<<<<<<< HEAD
        <Button sx={{float:"right",marginTop:1}}
        onClick={OnLogout} color="error">Log Out</Button>
      </div>
      {
        (prodDetail.length===0)?<Typography color="alert" variant="caption">No records found</Typography>:<ShowProds/>
      }
      <br></br>
=======
        <Button onClick={OnLogout} color="error">Log Out</Button>
      </div>
>>>>>>> d862b82f25a789ccbdc5c551679f42f30573bd7a
      <Button onClick={()=>{setOnAdd(true)}}>Add Details</Button>
      {
        (OnAdd!="")?<DetailsForm/>:""
      }
    </div>
  )
}

export default Home
