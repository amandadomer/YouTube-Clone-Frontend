import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comment = (props) => {
    const [comments, setComments] = useState({});
    const [videoId] = useState ({});
    
    useEffect(() => {
        axios.get(`http://localhost:5000/api/comments/${videoId}`)
            .then(response => setComments(response.data))
            }, [videoId]);
    
        return (
        <div>
            <tbody>
            {comments && comments.map((comment) => {
                return(
                    <tr key={comment.id} >
                        <td>{comment.text}</td>
                    </tr>
                )
            })}
            </tbody>
        </div>
    )
}

export default Comment;