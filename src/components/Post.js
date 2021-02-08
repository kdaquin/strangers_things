import {React, useEffect, useState} from 'react';

const myToken = localStorage.getItem('myToken');
let postId;


let messageSubmitHelper = () => {
    document.getElementById('messageModal').style.display = "none"

    fetch(`https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts/${postId}/messages`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${myToken}`
        },
        body: JSON.stringify({
          message: {
            content: `${document.getElementById('messageFieldId').value}`
          }
        })
      }).then(response => response.json())
        .then(result => {
          console.log(result);
        })
        .catch(console.error);

}


const Posts = () => {

    const [posts,setPosts] = useState([]);
     useEffect( async () => {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts')
            const data = await response.json();
            console.log(data)
            setPosts(data.data.posts)
    
        
    }, [])


    if (localStorage.getItem('searchParam')){
 
        let filteredPosts = posts.filter(post => post.description.includes(localStorage.getItem('searchParam')) || post.location.includes(localStorage.getItem('searchParam')) || post.author.username.includes(localStorage.getItem('searchParam')) || post.title.includes(localStorage.getItem('searchParam')))


        return (


            <div className='post-page'>
                
                <div 
                    id="messageModal" 
                    className="modal">
                        <h1>Input text:</h1>
                        <input 
                            id='messageFieldId'
                            className="messageField"
                            type="text"
                            placeholder="Text here">
                        </input>
                        <button 
                            className= 'register-button' 
                            onClick={messageSubmitHelper}>
                            Message
                        </button>
                </div>
                
                {
                    filteredPosts.map((post, index)=>
                <div className="posts"
                     key ={index}>
                        <h2 className="posts-title">
                            {post.title}
                        </h2>
                        <p className="posts-description"> 
                            {post.description}
                        </p>
                    
                        <p className="post-price"> 
                            {post.price}
                        </p>
                        <p className="post-location">
                             Location: { post.location}
                        </p>
                        <p className="deliver">
                        { post.willDeliver ? 'Will Deliver': 'Pick Up Only'}
                        </p>
                        <h3 className="post-username">
                            {post.author.username}
                        </h3>
                        <button type='button'
                            className="message-button"
                            onClick={()=> {postId = post._id; 
                            const p = document.createElement('h3');
                            p.innerText = `Sending a mesage to ${post.author.username}`;
                            document.querySelector('.modal').appendChild(p);
                                return document.getElementById('messageModal').style.display = "grid"}}>
                                            Message User
                        </button>
                     </div>)
                }

            </div>
        )

            } else {

    return (
        <div className='post-page'>
            

            <div 
                id="messageModal" 
                className="modal">
                <h2>Input text:</h2>
                <input 
                    id='messageFieldId'
                    className="messageField"
                    type="text"
                    placeholder="Text here">
                </input>
                <button 
                    className= 'register-button' 
                        onClick={messageSubmitHelper}>
                    Message</button>
            </div>

            {
                posts.map((post, index)=>
                    <div className="posts"
                        key ={index}>
                             <h2 className="posts-title">
                                  {post.title}
                            </h2>
                            <p className="posts-description"> 
                                {post.description}
                            </p>
                            
                            <p className="post-price"> 
                                {post.price}
                            </p>
                            <p className="post-location">
                                Location: { post.location}
                            </p>
                            <p className="deliver">
                               { post.willDeliver ? 'Will Deliver': 'Pick Up Only'}
                            </p>
                            <h3 className="post-username">
                                {post.author.username}
                            </h3>
                        <button type='button'
                                className="message-button"
                                onClick={()=> {postId = post._id; 
                                    const p = document.createElement('h3');
                                    p.innerText = `Sending a mesage to ${post.author.username}`;
                                    document.querySelector('.modal').appendChild(p);
                                return document.getElementById('messageModal').style.display = "grid"}}>
                                    Message User
                        </button>
                    </div>)
            }

         </div>
                
    )
        }

}
// console.log(post._id) 
export default Posts;

