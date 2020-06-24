import React from 'react';
import "./scss/App.scss";
import { AppProvider } from './utils/AppContext';
import Nav from './components/Nav';
import Home from './components/Home';
import SavedBooks from './components/SavedBooks';
import MessageModal from './components/MessageModal';
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Nav />
          <section id="wrapper">
            <Switch>
              <Route path="/" exact activeClassName='is-active' component={Home}></Route>
              <Route path="/saved" activeClassName='is-active' component={SavedBooks}></Route>
            </Switch>
          </section>
          <MessageModal />
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;