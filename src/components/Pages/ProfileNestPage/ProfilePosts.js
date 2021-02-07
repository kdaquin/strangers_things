import {React, useEffect, useState} from 'react';
const myToken = localStorage.getItem('myToken')

const ProfilePost = () => {
    const [posts,setPosts] = useState([]);
    
    const handleDelete = async (postIdToDelete) => {
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts/${postIdToDelete}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${myToken}`
            }
        })
        const data = await response.json()
        console.log('delete',data);
        if(data) {
            const newPosts = posts.filter(post => post._id !== postIdToDelete);
            setPosts(newPosts)
        }
    }

  useEffect( async () => {

fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/users/me', {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${myToken}`
  },
}).then(response => response.json())
  .then(result => {
    console.log(result);
    setPosts(result.data.posts)
  })
  .catch(console.error);
    }, [])
return (
    
    <div className="profile-my-post">
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
                    <h3 className="post-username">
                        {post.author.username}
                    </h3>
                    <p className="post-price"> 
                        {post.price}
                    </p>
                    <p className="post-location">
                        {post.location}
                    </p>
                    <button type='button'
                             className="delete-button" 
                             onClick={() => handleDelete(post._id)}>Delete</button>
            </div>)
            
       }
    </div>
)

}
export default ProfilePost;