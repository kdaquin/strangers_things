import React from 'react';
import NavBar from './NavBar';
import {
    BrowserRouter as Router,
    Redirect
  } from "react-router-dom";
const Title = () => {
    return (
        <div>
            <button className="sign-out"
            onClick={()=> window.location.href = "/index.html"}>
                Sign Out
            </button>
            <h1 className = "title">
                Stranger's Things
            </h1>
            <NavBar/>
            <hr></hr>




        </div>
    )


}
export default Title;