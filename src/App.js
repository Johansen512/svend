
import './App.css';
import { Router } from '@reach/router';
import React from 'react';
import DataContextProvider from './Contexts/DataContext';
import Welcome from "./Components/Welcome";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (

    <DataContextProvider>
    <>
    <Router>
    <Welcome path="/" />
    <Home path="Home" />
    <Login path="Login" />
      
    
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
