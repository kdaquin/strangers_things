import {React, useEffect, useState} from 'react';
const myToken = localStorage.getItem('myToken')

const DirectMessages = () => {
    const [posts,setPosts] = useState([]);
    //     useEffect( async () => {
    //         const response = await fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts')
    //         const data = await response.json();
    //         console.log(data)
    //         setPosts(data.data.posts)
    
    //         if (data.data.posts.isAuthor) {
    //             posts.map((post, index) =>
    //             <div key={index}>{post.title}</div>)
    //         }
        
    // }, [])
    
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
           {
                posts.map((post, index)=> 
                    
                    <div className="posts"
                    key ={index}>
                         <h2 className="posts-title">
                             Item: {post.post.title}
                        </h2>
                        <p className="posts-description"> 
                            Message: {post.content}
                        </p>
                        <h3 className="post-username">
                           From: {post.fromUser.username}
                        </h3>
                        <p className="post-price"> 
                            {post.price}
                        </p>
                        <p className="post-location">
                            {post.location}
                        </p>
    
                </div>)
                
           }
        </div>
    )
}

export default DirectMessages;