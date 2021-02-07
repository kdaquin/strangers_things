import React from 'react';
import NavBar from './NavBar';

 const signOut = () => {
    localStorage.removeItem('myToken')
    console.log('signedout')
    document.location.href="/";
  }
const Title = () => {
    return (
        <div className='title'>
            <div className="username-sign-out">
            <button className="sign-out" onClick={signOut}>
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