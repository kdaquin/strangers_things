import {React, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import NavBar from './NavBar';


const LoginWindow = () => {
    const [submittedSucessful, setSubmittedSuccessful] = useState(false)
    function authenticate(event) {
        ///check that the user entered stuff first.
        // ajax request to backend
        // backend response will say authenticated or not/
        event.preventDefault()
        console.log('submitted the form')
        setSubmittedSuccessful(true)
    }
if (submittedSucessful) {
    return <Redirect to="/home"/>
}
return (
    <div className="login">
        
        <input className="login-email-input"
                type="text"
                placeholder="Email or Username">
        </input>
        
        <input className ="login-password-input"
                type="text"
                placeholder="password">
        </input>
        <button className="login-button"
                onClick={authenticate}>
                Login
        </button>
        <p className ="login-pTag">or</p>
        <button 
            className="login-sign-up-button"
            // onClick={<SignUp />}
            >
            Sign up!
        </button>
        

        

        </div>
    

)

}

const SignUp = () => {
    return (
    <div id="myModal" className="modal">
    <input className="signup-first-input"
        type="text"
        placeholder="FirstName">
    </input>
    <input className="signup-last-input"
        type="text"
        placeholder="LastName">
    </input>
    <input className="signup-email-input"
        type="text"
        placeholder="Email">
    </input>
    <input className="signup-password-input"
        type="text"
        placeholder="Password">
    </input>
    {/* <input type="checkbox" id="above18" value="Are you 18 years of age?">
  <label for="vehicle1"> I Am 18</label><br></br> */}
    <button className= 'register-button'>Register</button>
</div>
    )
}






const Landing = () => {
 return (
   
    <div className="landing">
        
        <h1 className="title"> 
            Stranger's Things
        </h1>
        <ul className="title-list">
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