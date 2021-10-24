import React, { useState } from 'react';
import './addReply.css';
import axios from 'axios';

const CreateReply = (props) => {
    const [text, setText] = useState('');
    const [replies, setReplies] = useState ([])

     const handleChange = (event) => {
         setText(event.target.value);
       };
 
     const handleSubmit =(event)=>{
         event.preventDefault();
         const replies={
             replies: text
         }
     
         addReplies(replies);
     }
 
     const addReplies = (replies) => {
         axios.post(`http://localhost:5000/api/comments/reply/${props._id}`, replies)   
       }
 
     return (
         <div>
             <div>{`${replies}`}</div>
             <h4>Add Reply</h4>
             <form onSubmit ={handleSubmit}>
                <input style={{width: '100%', borderRadius: '5px'}}name="text" placeholder="Add a reply"onChange={handleChange}></input>
                <button type = "submit"> Add Reply</button>
             </form>  
 
         </div>
     )
 }

export default CreateReply;