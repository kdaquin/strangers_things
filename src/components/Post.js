import {React, useEffect, useState} from 'react';
import { CreatePost } from './Pages';
const myToken = localStorage.getItem('myToken')
let postId 
const Delete = () => {
    

}


// let RenderMessageBox = () => {
//     console.log('logged')
// return (
//     <div id="myModal" className="modal">
//     <input className="signup-first-name-input"
//         type="text"
//         placeholder="First Name">

// </input>
// <input className="signup-last-name-input"
//     type="text"
//     placeholder="Last Name">
// </input>
// <input className="signup-first-input"
//     type="text"
//     placeholder="Username">
// </input>
// <input className="signup-password-input"
//     type="text"
//     placeholder="Password">

// </input>
// {/* <input type="checkbox" id="above18" value="Are you 18 years of age?">
// <label for="vehicle1"> I Am 18</label><br></br> */}
// <button className= 'register-button' >Register</button>
// </div>
// )
// }


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

//     const handleDelete = async (postIdToDelete) => {
//         const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts/${postIdToDelete}`,{
//             method: 'DELETE',


//         })
//         const data = await response.json()
//         if(data) {
//             const newPosts = posts.filter(post => post.id !== postIdToDelete)
//             setPosts(newPosts)
//         }
// }
    if (localStorage.getItem('searchParam')){
console.log('render all')
 
let filteredPosts = posts.filter(post => post.description.includes(localStorage.getItem('searchParam')) || post.location.includes(localStorage.getItem('searchParam')) || post.author.username.includes(localStorage.getItem('searchParam')) || post.title.includes(localStorage.getItem('searchParam')))


return (


    <div className='post-page'>
        
        <div id="messageModal" className="modal">
<h1>Input text:</h1>
<input id='messageFieldId'className="messageField"
    type="text"
    placeholder="Text here">
</input>

{/* <input type="checkbox" id="above18" value="Are you 18 years of age?">
<label for="vehicle1"> I Am 18</label><br></br> */}
<button className= 'register-button' 
        onClick={messageSubmitHelper}>
    Message</button>
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
                                className="delete-button"
                                onClick={()=> {postId = post._id; 
                                    const p = document.createElement('h1');
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
            

            <div id="messageModal" className="modal">
<h1>Input text:</h1>
<input id='messageFieldId'className="messageField"
    type="text"
    placeholder="Text here">
</input>

{/* <input type="checkbox" id="above18" value="Are you 18 years of age?">
<label for="vehicle1"> I Am 18</label><br></br> */}
<button className= 'register-button' 
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
                                className="delete-button"
                                onClick={()=> {postId = post._id; 
                                    const p = document.createElement('h1');
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

