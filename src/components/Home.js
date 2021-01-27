import React from 'react';

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
        <button class="login-sign-up-button">Sign up</button>
        
        </div>
)


}








const Home = () => {
 return (
    <div class="home">
        <h1 class="title"> 
            Stranger's Things
        </h1>
        <ul class="title-list">
            <li>Buy/Sell Items right away</li>
            <li>Post or Find job oppurtunities</li>
            <li>Connect with thousands of users</li>
        </ul>
        <LoginWindow />
    </div>
 )
}

export default Home;