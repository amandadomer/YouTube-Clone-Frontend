import React, {useEffect, useState} from 'react';
import './addNewComment.css';
import axios from 'axios';

const CreateComment = (props) => {
    const [text, setText] = useState('');
 
     const handleChange = (event) => {
         setText(event.target.value);
       };
 
     const handleSubmit =(event)=>{
         event.preventDefault();
         const newComment={
             text: text,
             videoId: props.videoId
         }
     
         addNewComment(newComment);
     }
 
     const addNewComment = (newComment) => {
         axios.post('http://localhost:5000/api/comments/', newComment)   
       }
 
     return (
         <div>
             <h2>Add Comment</h2>
             <form onSubmit ={handleSubmit}>
                <input style={{width: '100%', borderRadius: '5px'}}name="text" placeholder="Add a comment"onChange={handleChange}></input>
                <button type = "submit"> Add Comment</button>
             </form>  
 
         </div>
     )
 }

export default CreateComment
