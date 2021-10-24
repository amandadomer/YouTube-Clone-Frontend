import React, { useState } from 'react';
import './addReply.css';
import axios from 'axios';

const CreateReply = (props) => {
    const [text, setText] = useState('');
    const [replies, setReplies] = useState ([])

     const handleChange = (event) => {
         setText(event.target.value);
       };
 
     const handleSubmit =(event, props)=>{
         event.preventDefault();
         const replies={
             text: text
            }
            axios.post(`http://localhost:5000/api/comments/reply/${props.commentId}`, replies) 
            .then(console.log(props.commentId))  
    }
 

 
     return (
         <div>
             <div>{`${replies}`}</div>
             <h4>Add Reply</h4>
             <form onSubmit ={handleSubmit}>
                <input style={{width: '40%', height: '40px', borderRadius: '5px'}}name="text" placeholder="Add a reply"onChange={handleChange}></input>
                <button type = "submit" className="btn btn-dark">Add Reply</button>
             </form>  
 
         </div>
     )
 }

export default CreateReply;