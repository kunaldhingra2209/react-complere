import React from 'react';
import './App.css';
import Home from './home'
import Profile from './profile'
import Func from './func'
import Forms from './forms'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Header from './header';


function App() {
  return (
    <div className="App">
      <header className="App-header">
         <h1>complere infosystem</h1>
        
         <Router>
         <Header>
           <Link to="">Home   </Link>
           <Link to="/profile">  Profile</Link>
           <Link to="/forms">  Forms</Link>

           
        {/* <Home />
        <Profile />
        <Func text="function profile component" /> 
        < Forms /> */}
        
        </Header >
        <Route exact path="/"  component={Home} />
           <Route path="/profile"  component={Profile} />
           <Route path="/forms"  component={Forms} />
          </Router>
      </header>
    </div>
  );
}

export default App;
