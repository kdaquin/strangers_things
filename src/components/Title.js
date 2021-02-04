import React from 'react';
import NavBar from './NavBar';

const Title = () => {
    return (
        <div>
            <h4>{localStorage.getItem('username')}</h4>
            <button className="sign-out">
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