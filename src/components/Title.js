import React from 'react';
import NavBar from './NavBar';
import {
    BrowserRouter as Router,
    Redirect
  } from "react-router-dom";
const Title = () => {
    return (
        <div className='title'>
            <div className="username-sign-out">
            <button className="sign-out">
                Sign Out
            </button>
            </div>
            <h1>
                Stranger's Things
            </h1>
            <NavBar/>
            <hr></hr>



        </div>
    )


}
export default Title;