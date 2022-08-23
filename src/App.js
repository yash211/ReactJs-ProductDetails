import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import { useState } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { useNavigate } from "react-router-dom";


function App() {

  const [errors,setError]=useState({
    EmailError:"",
    PassError:"",
    Cpass:"",
  });
  const [users,setUsers]=useState({
    fname:"",
    email:"",
    isLogin:false,
  });

  var emailerror="",passerror="",cpasserror="";
  const adduser=(userdetails)=>{
    //email 
    //console.log(errors.length)
    const validEmail=RegExp('^[a-zA-Z0-9]+@[a-zA-Z]+[.a-zA-Z]+$');
    const validPass=RegExp('^[0-9]');
    if(!validEmail.test(userdetails.email)){
        emailerror="Email is incorrect";
    }
    if(!validPass.test(userdetails.password) || userdetails.password.length>6){
      passerror="Password is Incorrect";
    }
    if(userdetails.password!==userdetails.confirmPassword){
      cpasserror="Confirm Password and Password should be same";
    }
    setError([errors.EmailError=emailerror,errors.PassError=passerror,,errors.Cpass=cpasserror]);
    //console.log(errors);
    if(emailerror==="" && passerror==="" && cpasserror===""){
     setUsers([users.fname=userdetails.name,users.email=userdetails.email,users.isLogin='true']);
    }
    console.log(errors);
    console.log(users);
  }

  const logout=()=>{
    console.log('Logout');
    setUsers({
      fname:"",
      email:"",
      isLogin:false,
    });
  }
  return (
    // <Routes>
    //   <Route path="/" element={<LoginForm add={adduser}/>}/>
    //   <Route path="/home" element={<Home user={users}/>} />
    //   {
    //     (users.isLogin == true)?  
    //     <Link to="/home" target="_blank"></Link>
    //     : 
    //     <Alert>{errors.PassError}</Alert>
    //   }
    // </Routes>
    <div>
      {
        (users.email!=="")?  
        <Home user={users} logout={logout}/>
        : 
        <LoginForm add={adduser} err={errors} />
      }
    </div>

  );
}

export default App;
