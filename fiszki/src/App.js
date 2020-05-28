import React from 'react';
import Header from './Header/Header';
import Menu from './Menu/Menu';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
    </div>
      // <Router>
      //     <div>
      //     <Router>
      //         <Switch>
      //         <Route exact path="/">
      //             <Home />
      //         </Route>
      //         <Route path="/about">
      //             <About />
      //         </Route>
      //         <Route path="/create">
      //             <Create />
      //         </Route>
      //         <Route path="/learn">
      //             <Learn />
      //         </Route>
      //         <Route path="/ideas">
      //             <Ideas />
      //         </Route>
      //         </Switch>
      //     </Router>
      //     </div>
      // </Router>
  );

}

export default App;
