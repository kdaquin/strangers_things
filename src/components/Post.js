import {React, useEffect, useState} from 'react';

const Posts = () => {
    const [posts,setPosts] = useState([]);
     useEffect( async () => {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts')
            const data = await response.json();
            console.log(data)
            setPosts(data.data.posts)
        
        
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
                            <h3 className="post-username">{post.author.username}</h3>
                            <p className="post-price"> 
                                {post.price}
                            </p>
                            <p className="post-location">{post.location}</p>

                    </div>)
            }
            {/* <div className="posts">
            <h2 className="posts-title">
                PlaceHolder Title
            </h2>
            <p className="posts-description"> 
                Description Sleeping in his car was never the plan but sometimes things don't work out as planned. This had been his life for the last three months and he was just beginning to get used to it. He didn't actually enjoy it, but he had accepted it and come to terms with it. Or at least he thought he had. All that changed when he put the key into the ignition, turned it and the engine didn't make a sound.
            </p>
            <img className="posts-img"
                src="https://picsum.photos/200/300" 
                alt="placeholder-example">
            </img>
            </div> */}
          

        </div>
    )


}

export default Posts;