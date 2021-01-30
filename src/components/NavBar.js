import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
  

const NavBar = () => {
    return (
        <div>

            <nav className="nav-bar">
                <Link to ='/home'>Home </Link>
                <Link to ='/profile'>Profile </Link>
                <Link to ='/createpost'>Create Post </Link>
                <input className = "search-bar" 
                        type="text" 
                        placeholder="Search.." 
                        name="search">
                </input>
            </nav>
            <main>
           
            </main>

        </div>

    )

}

export default NavBar;