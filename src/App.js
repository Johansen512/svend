
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
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons'


library.add(fab, faArrowLeft, faStar)

function App() {
  return (

    <DataContextProvider>
    <>
    <Router>
    <Welcome path="/" />
    <Home path="Home" />
    <ClassDetails path="ClassDetails/:id"/>
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
