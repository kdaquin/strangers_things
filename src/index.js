import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Landing} from './components';
import {NavBar, Home} from './components';



const App = () => {

  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/home">
        <Home />
        </Route>
          <Route path="/">
        <Landing />
        </Route>
        </Switch>
      </div>
      </Router>
  )
};


     
ReactDOM.render(<App />, document.getElementById('app') )