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
        <div>
           Send Message
        </div>
    )

}
export default SavedPost;
