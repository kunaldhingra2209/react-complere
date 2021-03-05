import React from 'react';
import './App.css';
import Home from './home'
import Profile from './profile'
import Func from './func'
import Forms from './forms'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
         <h1>kajal dhiman</h1>
         <Router>
           <Link to="">Home   </Link>
           <Link to="/profile">  Profile</Link>
           <Link to="/forms">  Forms</Link>

           <Route exact path="/"  component={Home} />
           <Route path="/profile"  component={Profile} />
           <Route path="/forms"  component={Forms} />
        {/* <Home />
        <Profile />
        <Func text="function profile component" /> 
        < Forms /> */}
        </Router>
      </header>
    </div>
  );
}

export default App;
