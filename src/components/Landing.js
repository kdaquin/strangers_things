import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import NavBar from './NavBar';


const LoginWindow = () => {
return (
    <div class="login">
        
        <input class="login-email-input"
                type="text"
                placeholder="Email or Username">
        </input>
        
        <input class ="login-password-input"
                type="text"
                placeholder="password">
        </input>
        <button class="login-button">Login</button>
        <p class ="login-pTag">or</p>
        <button 
            class="login-sign-up-button"
            onClick={<SignUp />}>
            Sign up!
        </button>
        

        

        </div>
    

)

}

const SignUp = () => {
    return (
    <div id="myModal" class="modal">
    <input class="signup-first-input"
        type="text"
        placeholder="FirstName">
    </input>
    <input class="signup-last-input"
        type="text"
        placeholder="LastName">
    </input>
    <input class="signup-email-input"
        type="text"
        placeholder="Email">
    </input>
    <input class="signup-password-input"
        type="text"
        placeholder="Password">
    </input>
    {/* <input type="checkbox" id="above18" value="Are you 18 years of age?">
  <label for="vehicle1"> I Am 18</label><br></br> */}
    <button class= 'register-button'>Register</button>
</div>
    )
}






const Landing = () => {
 return (
   
    <div class="home">
         <NavBar />
        <h1 class="title"> 
            Stranger's Things
        </h1>
        <ul class="title-list">
            <li>Buy/Sell Items right away</li>
            <li>Post or Find job oppurtunities</li>
            <li>Connect with thousands of users</li>
        </ul>
        <LoginWindow />
        {/* {<SignUp /> } */}

    </div>
 )
}

export default Landing;