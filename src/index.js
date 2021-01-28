import React from 'react';
import ReactDOM from 'react-dom';
import {Landing} from './components';



const App = () => {
  return (
    <div>
  <Landing />
  </div>
  )
};


     
ReactDOM.render(<App />, document.getElementById('app') )