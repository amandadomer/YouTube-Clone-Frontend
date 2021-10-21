import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comment = (props) => {
    const [comments, setComments] = useState({});
    
    useEffect(() => {
        axios.get('http://localhost:5000/api/comments/M7lc1UVf-VE')
            .then(response => setComments(response.data))
            }, []);
    
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