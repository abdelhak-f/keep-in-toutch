import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Client from "./components/Client";
import CreateClient from "./components/CreateClient";
import SendMail from "./components/SendMail";


function App() {  
  return (
   <Router>
  
    <Navbar/>
 
     <Route exact path="/" >
         <Home />
     </Route>
     <Route path="/client">
         <Client />
     </Route>
     <Route path="/create">
         <CreateClient />
     </Route>
     <Route path="/sendmail/:id" component={SendMail}/>
     
   </Router>
      
  );
}


export default App;
