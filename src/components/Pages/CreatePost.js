import {React, useState, useEffect} from 'react';
import Title from '../Title';
const myToken = localStorage.getItem('myToken')
console.log(myToken)
const CreatePost = () => {

    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [price, setPrice] = useState([])
    const [delivery, setDelivery] = useState(true)

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
            price: price,
            willDeliver: delivery
            }
        })
    })
    const data = await response.json();
    console.log('data',data);
    
    setTitle('')
    setDescription('')
    setPrice('')
    // setDelivery(false) needs work on resetting check
}



    return (
        <div>
            <Title />
            <h2 className="create-title">
                Create a Post 
            </h2>
            <div className="create-post">
            
            <form className="create-post-form"
                    onSubmit={handleSubmit}>
                <input  className="create-post-title"
                        type='text' 
                        placeholder="title" 
                        value={title} 
                        onChange={(event) => setTitle(event.target.value)}>
                </input>
                <input  className="create-post-description"
                        type='text' 
                        placeholder="description" 
                        value={description} 
                        onChange={(event) => setDescription(event.target.value)}>
                 </input>
                <input  className="create-post-price"
                        type='text' 
                        placeholder="price" 
                        value={price} 
                        onChange={(event) => setPrice(event.target.value)}>
                 </input>
                 
                 <input id="create-post-delivery"
                        type ='checkbox'
                        value = {delivery}
                        onClick={(event)=> setDelivery(event.target.value)}>
                            
                        </input>
                    
                <button type="submit" 
                        className="submit-button">
                        submit
                </button>

            </form>
            </div>
        </div>
    )



}

export default CreatePost;