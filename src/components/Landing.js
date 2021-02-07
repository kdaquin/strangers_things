import {React, useState} from 'react';
import {
    BrowserRouter as Router,
    Redirect,
  } from "react-router-dom";
import NavBar from './NavBar';



const LoginWindow = () => {
    const [submittedSucessful, setSubmittedSuccessful] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    function authenticate(event) {
        
        fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/users/login', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user: {
                username: username,
                password: password
              }
            })
          }).then(response => response.json())
            .then(result => {
              console.log(result);
              setSubmittedSuccessful(result.success)
              localStorage.setItem('myToken', result.data.token);
            })
            .catch(console.error)

        event.preventDefault()
    }
  if (submittedSucessful === true) {
    return <Redirect to="/home"/>
  }
  return (
    <div className="login">
        
        <input id='loginUsername'className="login-email-input"
                type="text"
                placeholder="Email or Username"
                onChange={(event)=>setUsername(event.target.value)}>
        </input>
        
        <input id='loginPassword'className ="login-password-input"
                type="text"
                placeholder="password"
                onChange={(event)=>setPassword(event.target.value)}>
        </input>
        <button className="login-button"
                onClick={authenticate}>
                Login
        </button>
        <p className ="login-pTag">or</p>
        <button 
            className="login-sign-up-button"
            // onClick={<SignUp />}
            onClick={()=> document.getElementById('myModal').style.display = 'grid'}
            >
            Sign up!
        </button>
    </div>

  )

}

const SignUp = () => {
    const [submittedSucessful, setSubmittedSuccessful] = useState(false)
    const [newUsername, setUsername] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    function authenticate(event) {

    fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/users/register', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: newUsername,
            password: newPassword
          }
        })
      }).then(response => response.json())
        .then(result => {
          console.log(result);
          setSubmittedSuccessful(result.success)        })
        .catch(console.error);
        event.preventDefault()

    }
    if (submittedSucessful === true) {
        return <Redirect to="/home"/>
    }
    return (

      <div id="myModal" className="modal">
        <input className="signup-first-name-input"
            type="text"
            placeholder="First Name"
            onChange={(event)=>setFirstName(event.target.value)}>

        </input>
        <input 
          className="signup-last-name-input"
          type="text"
          placeholder="Last Name"
          onChange={(event)=>setLastName(event.target.value)}>
       </input>
        <input 
          className="signup-first-input"
          type="text"
          placeholder="Username"
          onChange={(event)=>setUsername(event.target.value)}>
        </input>
        <input 
          className="signup-password-input"
          type="text"
          placeholder="Password"
          onChange={(event)=>setNewPassword(event.target.value)}>
        </input>
        <button 
          onClick={authenticate}
          className= 'register-button' >
          Register
          </button>
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
           
            <li>
            <span className="material-icons">shopping_cart</span>
            Buy/Sell Items right away
            </li>
            <li>
              <span className="material-icons">search</span>
              Post or Find job oppurtunities
            </li>
            <li>
            <span className="material-icons">group</span>
            Connect with thousands of users
            </li>
            
        </ul>
        <h3 className="title-message">
            Hello! Welcome to Stranger's Things. Sign in or Register to begin.
            </h3>
        <LoginWindow />
        {<SignUp /> }

    </div>
 )
}

export default Landing;