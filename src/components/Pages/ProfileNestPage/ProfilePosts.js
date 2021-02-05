import {React, useEffect, useState} from 'react';

const ProfilePost = () => {
    const [posts,setPosts] = useState([]);
    useEffect( async () => {
        const response = await fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts')
        const data = await response.json();
        console.log(data)
        setPosts(data.data.posts)

        if (data.data.posts.isAuthor) {
            posts.map((post, index) =>
            <div key={index}>{post.title}</div>)
        }
    
}, [])


return (
    
    <div>
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

            </div>)
            
       }
    </div>
)

}
export default ProfilePost;