import React from 'react';
import NavBar from './NavBar';

const Title = () => {
    return (
        <div className='title'>
            <div className="username-sign-out">
            <h4 className="username">{localStorage.getItem('username')}</h4>
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