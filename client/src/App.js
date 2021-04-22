import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Client from "./components/Client";
import CreateClient from "./components/CreateClient";


function App() {  
  return (
   <Router>
  
    <Navbar/>
 
     <Route path="/" exact>
         <Home />
     </Route>
     <Route path="/client">
         <Client />
     </Route>
     <Route path="/create">
         <CreateClient />
     </Route>
     
   </Router>
      
  );
}


export default App;
