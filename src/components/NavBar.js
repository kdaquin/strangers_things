import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from './Home';

const NavBar = () => {
    return (
        <div>
            <nav>
                <Link to ='/home'>Home </Link>
               
            </nav>
            <main>
           
            </main>

        </div>

    )

}

export default NavBar;