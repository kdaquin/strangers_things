import {React, useEffect, useState} from 'react';
const myToken = localStorage.getItem('myToken')

const SavedPost = () => {
    
    
useEffect( async () => {

    fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/users/me', {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${myToken}`
  },
}).then(response => response.json())
  .then(result => {
    console.log(result.data._id);
  })
  .catch(console.error);
}, [])







    return (
     <div class ="message">
        <input type="text"
            placeholder="Which post would you like to message?">
        </input>
        <input type="text"
            placeholder="Subject">
        </input>
        <input type="text"
            placeholder="Message:">
        </input>
        <button>
            Send Message
        </button>

    </div>
    )

}
export default SavedPost;
