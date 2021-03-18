
import './App.css';
import { Router } from '@reach/router';
import React from 'react';
import DataContextProvider from './Contexts/DataContext';
import Welcome from "./Components/Welcome";
import Home from "./Components/Home";

function App() {
  return (

    <DataContextProvider>
    <>
    <Router>
    <Welcome path="/" />
    <Home path="Home" />
      
    
    </Router>

    </>

    </DataContextProvider>
  );
}

export default App;
