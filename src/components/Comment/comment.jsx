import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comment = (props) => {
    const [comments, setComments] = useState([]);
    
    useEffect(() => {
        axios.get(`http://localhost:5000/api/comments/${videoId}`)
            .then(response => setComments(response.data))
            }, [videoId]);
    
        return (
        <div>
            <ul>
            {comments && comments.map((comment) => {
                return(
                    <li>{comment.text}</li>        
                )
            })}
            </ul>
        </div>
    )
}

export default Comment;