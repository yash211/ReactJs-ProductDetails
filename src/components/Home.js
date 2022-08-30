import { Button, Typography , AppBar, Toolbar} from '@mui/material'
// import { Routes, Route, Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react'
import DetailsForm from './DetailsForm';
import ShowProds from './ShowProds';


const Home = (props) => {
  
  const [prodDetail,setproDetails]=useState([]);

  const [OnAdd,setOnAdd]=useState("");
  const OnLogout=()=>{
    props.logout();
  }

  const addDetHandler=(product)=>{
    setOnAdd("false");

    setproDetails([...prodDetail,product]);
    console.log(product);
  }
  
  return (
    <div>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome,{props.user[0]}
          </Typography>
          <Button onClick={()=>{setOnAdd("true")}} color="inherit" startIcon={<AddIcon/>}></Button>
          <Button color="error" onClick={OnLogout}>Log Out</Button>
        </Toolbar>
      </AppBar>
      
      {
        (OnAdd==="true")?
        <DetailsForm addDetails={addDetHandler} />:<ShowProds ProductList={prodDetail}/>
      }
    </div>
  )
}

export default Home