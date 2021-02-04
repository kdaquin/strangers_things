import {React, useState, useEffect} from 'react';
import Title from '../Title';

const CreatePost = ({posts, setPosts}) => {

    const [title, setTitle] = useState([]);
    const [body, setBody] = useState([]);

    const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('title, body',title, body);
    const response = await fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'Application/json',
        },
        body: JSON.stringify({
            title,
            body
        })
    })
    const data = await response.json();
    console.log('data',data);
    setPosts([data, ...posts]);
    setTitle('')
    setBody('')
}


    return (
        <div>
            <Title />

            <h2>Create a Post </h2>
            <form onSubmit={handleSubmit}>
                <input type='text' 
                        placeholder="title" 
                        value={title} 
                        onChange={(event) => setTitle(event.target.value)}>
                </input>
                <input type='text' 
                        placeholder="description" 
                        value={body} 
                        onChange={(event) => setBody(event.target.value)}>
                 </input>
                <button type="submit" 
                        className="submit-button">
                        submit
                </button>
            </form>
        </div>
    )



}

export default CreatePost;