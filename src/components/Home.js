import { Button, Typography, AppBar, Toolbar, Tooltip } from '@mui/material'
// import { Routes, Route, Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import React, { useState, useEffect, useContext } from 'react';
import DetailsForm from './DetailsForm';
import ShowProds from './ShowProds';
import axios from 'axios';
import { ReqContext } from '../App.js';


const Home = (props) => {

  const user = useContext(ReqContext);
  console.log(user);
  const [prodDetail, setproDetails] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('http://localhost:3030/products');
      console.log(response);
      setproDetails(response.data);
    };
    getProducts();
  }, [])

  const deleteItems=(id)=>{
    //e.preventDefault();
    axios.delete(`http://localhost:3030/products/${id}`)
    setproDetails(prodDetail.filter((items) => items.id!==id));
  }

  const [OnAdd, setOnAdd] = useState("");
  const OnLogout = () => {
    //axios.delete('http://localhost:3030/products/[1,2]');
    props.logout();
  }

  const addDetHandler = (product) => {
    setOnAdd("false");

    setproDetails([...prodDetail, product]);
    console.log(product);
  }

  return (
    <div>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome,{user[0]}
          </Typography>
          <Tooltip title="Add Product" arrow>
            <Button onClick={() => { setOnAdd("true") }} color="inherit" startIcon={<AddIcon />}></Button>
          </Tooltip>
          <Button color="error" onClick={OnLogout}>Log Out</Button>
        </Toolbar>
      </AppBar>

      {
        (OnAdd === "true") ?
          <DetailsForm addDetails={addDetHandler} /> : <ShowProds ProductList={prodDetail} del={deleteItems} />
      }
    </div>
  )
}

export default Home