import {React, useEffect, useState} from 'react';
const myToken = localStorage.getItem('myToken')

const DirectMessages = () => {
    const [posts,setPosts] = useState([]);
   
        useEffect( async () => {
    
    fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/users/me', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${myToken}`
      },
    }).then(response => response.json())
      .then(result => {
        console.log(result);
        setPosts(result.data.messages)
      })
      .catch(console.error);
        }, [])
    return (
        
        <div>
          <h3>Direct Messages</h3>
           {
                posts.map((post, index)=> 
                    
                    <div className="direct-message"
                    key ={index}>
                         <h2 className="message-title">
                             Item: {post.post.title}
                        </h2>
                        <p className="message-description"> 
                            Message: {post.content}
                        </p>
                        <h3 className="message-username">
                           From: {post.fromUser.username}
                        </h3>
                    </div>)
                
           }
        </div>
    )
}

export default DirectMessages;