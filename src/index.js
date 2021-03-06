import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  CreatePost, 
  Landing, 
  Profile,
  Home} from './components';




const App = () => {

  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/home">
        <Home />
        </Route>
        <Route path ='/createpost'>
          { <CreatePost  /> }
        </Route>
        <Route exact path ='/profile'>
          <Profile />
        </Route>
          <Route path="/">
        <Landing/>
        </Route>
       
        </Switch>
      </div>
      </Router>
  )
};


     
ReactDOM.render(<App />, document.getElementById('app') )