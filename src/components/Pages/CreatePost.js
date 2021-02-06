import {React, useState, useEffect} from 'react';
import Title from '../Title';
const myToken = localStorage.getItem('myToken')
console.log(myToken)
const CreatePost = () => {

    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [price, setPrice] = useState([])

    const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts', {
        method: 'POST',
        headers: {
            'Content-type':'application/json',
            'Authorization':`Bearer ${myToken}`
        },
        body: JSON.stringify({
            post: {
            description: description,
            title: title,
            price: price
            }
        })
    })
    const data = await response.json();
    console.log('data',data);
    
    setTitle('')
    setDescription('')
    setPrice('')
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
                        value={description} 
                        onChange={(event) => setDescription(event.target.value)}>
                 </input>
                <input type='text' 
                        placeholder="price" 
                        value={price} 
                        onChange={(event) => setPrice(event.target.value)}>
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