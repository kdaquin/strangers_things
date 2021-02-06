import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

let searchFunc = () => {
console.log(document.getElementById('search').value)
localStorage.setItem('searchParam', document.getElementById('search').value)
window.location.reload()
}
setTimeout(function(){ localStorage.removeItem('searchParam') }, 1500);

const NavBar = () => {
    return (
        <div>

            <nav className="nav-bar">
                <Link to ='/home'>Home </Link>
                <Link to ='/profile'>Profile </Link>
                <Link to ='/createpost'>Create Post </Link>
                <input className = "search-bar" 
                        id = 'search'
                        type="text" 
                        placeholder="Search.." 
                        name="search">
                        
                </input>
                <button className='searchButton' onClick={searchFunc}>Search</button>
            </nav>
            <main>
           
            </main>

        </div>

    )

}

export default NavBar;