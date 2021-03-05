import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import Home from './home'
import Profile from './profile'
import Func from './func'
import Forms from './forms'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

export default function Header() {
  const displayDesktop = () => {
    return <Router><AppBar><Toolbar>
      <h1>Resturant </h1> 
      
        <Link to="/"><h2>Home</h2>   </Link>
        <Link to="/profile">  Profile</Link>
        <Link to="/forms">  Forms</Link>

        
 
    
  </Toolbar>
  </AppBar>
  <Route exact path="/"  component={Home} />
        <Route exact  path="/profile"  component={Profile} />
        <Route exact  path="/forms"  component={Forms} />
  </Router>;
};
  
  return (
    <header>
      {displayDesktop()}
    </header>
  );
}