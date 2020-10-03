import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderComponent from './component/HeaderComponent';
// pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Uppercase from './pages/UpperCase';


function App() {
  return (
   <div>
      <Router>
      <div className="App">
        {/* <HeaderComponent/> */}
        <h1>Halaman Main</h1>
        <Switch>
          <Route exact path="/home" >
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </div>
    </Router>
    <Register /> <br/> <br/>
    <Uppercase />
   </div>
  );
}

export default App;
