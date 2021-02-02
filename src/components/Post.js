import {React, useEffect, useState} from 'react';

const Posts = () => {
    let callState = function () {
        // useEffect(() => {
        // fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts')
        //   .then(response => response.json())
        //   .then(result => {
        //     // console.log(result);
        //     let data = result.data.posts
        //     // console.log(result.data.posts[0].description)
        //     // result.data.posts.map(x => console.log(x) )
        //     for (var i = 0; data.length > i; i++){
        //         console.log(data[i])
        //         return (
        //             <div className='sneaky'>
        //             </div>
        //         )
        //     }
            
        //   })
        // }, [])


        }
        // callState()
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
                posts.map(post=><div key ={post.id}>{post.title}</div>)
            }
            <div className="posts">
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
            </div>
          

         </div>
    )


}

export default Posts;