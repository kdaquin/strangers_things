import {React, useEffect, useState} from 'react';
import { CreatePost } from './Pages';



const Delete = () => {
    

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



        
    return (
        <div className='post-page'>
            
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
                        {/* <button type='button'
                                className="delete-button"
                                onClick={handleDelete}>
                                    Delete
                        </button> */}
                    </div>)
            }

         </div>
    )


}

export default Posts;

