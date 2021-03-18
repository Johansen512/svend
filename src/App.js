
import './App.css';
import { Router } from '@reach/router';
import React from 'react';
import DataContextProvider from './Contexts/DataContext';
import Welcome from "./Components/Welcome";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Search from "./Components/Search";
import Schedule from "./Components/Schedule";
import SideNavi from "./Components/SideNavi";
import ClassDetails from "./Components/ClassDetails";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (

    <DataContextProvider>
    <>
    <Router>
    <Welcome path="/" />
    <Home path="Home" />
    <ClassDetails path="ClassDetails"/>
    <Search path="Search" />
    <Schedule path="Schedule"/>
    <Login path="Login" />
    <SideNavi path="SideNavi" />
      
    
    </Router>
    <ToastContainer 
      position="top-left"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover />

    </>

    </DataContextProvider>
  );
}

export default App;
