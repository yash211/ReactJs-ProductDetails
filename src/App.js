// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import LoginForm from './components/LoginForm';
import Home from './components/Home';

import { useState } from 'react';
// import { Alert, Snackbar } from '@mui/material';
// import { useNavigate } from "react-router-dom";


function App() {

  const [users,setUsers]=useState({
    fname:"",
    email:"",
    isLogin:false,
  });

  // var emailerror="",passerror="",cpasserror="";
  const adduser=(userdetails)=>{  
    //setError([errors.EmailError=emailerror,errors.PassError=passerror,,errors.Cpass=cpasserror]);
     setUsers([users.fname=userdetails.name,users.email=userdetails.email,users.isLogin='true']);
  }

  const logout=()=>{
    //console.log('Logout');
    setUsers({
      fname:"",
      email:"",
      isLogin:false,
    });
  }
  return (
    <div>
      {
        (users.email!=="")?  
        <Home user={users} logout={logout}/>
        : 
        <LoginForm add={adduser}/>
      }
    </div>

  );
}

export default App;
