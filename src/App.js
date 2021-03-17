
import './App.css';
import Welcome from "./Components/Welcome";
import Home from "./Components/Home";
import { Router } from '@reach/router';
import React from 'react';

function App() {
  return (
    <>
    <Router>
    <Welcome path="/" />
    <Home path="Home" />
      
    
    </Router>

    </>
  );
}

export default App;
