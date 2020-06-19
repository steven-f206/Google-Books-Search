import React from 'react';
import "./scss/App.scss";
import {AppProvider} from './utils/AppContext';
import Nav from './components/Nav';
import Home from './components/Home';
import Saved from './components/Saved';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <AppProvider> 
      <Router>
      <div className="App">
        <Nav />
        <section id="wrapper"> 
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/saved" component={Saved}></Route>
        </Switch>
        </section>
      </div>
      </Router>
    </AppProvider> 
  );
}

export default App;