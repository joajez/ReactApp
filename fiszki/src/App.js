import React from 'react';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route  } from "react-router-dom";

import './App.css';
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Create from './Components/Create/Create'
import Learn from './Components/Learn/Learn'
import Ideas from './Components/Ideas/Ideas'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Menu />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/create">
                  <Create />
                </Route>
                <Route path="/learn">
                  <Learn />
                </Route>
                <Route path="/ideas">
                  <Ideas />
                </Route>
              </Switch>
      </div>
    </Router>

  );

}

export default App;
