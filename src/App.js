// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import LoginForm from './components/LoginForm';
import Home from './components/Home';

import { useState,createContext } from 'react';
// import { Alert, Snackbar } from '@mui/material';
// import { useNavigate } from "react-router-dom";

//contextAPI is basicly used to provide props to hierarchy components
export const ReqContext=createContext();

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
          <ReqContext.Provider value={users}>
            <Home logout={logout}/>
          </ReqContext.Provider>
            : 
          <LoginForm add={adduser}/>  
      }
    </div>

  );
}

export default App;
