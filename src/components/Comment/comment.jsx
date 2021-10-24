import React, { useState, useEffect } from 'react';
import AddReply from '../AddReply/addReply'
import axios from 'axios';

const Comment = (props) => {
    const [comments, setComments] = useState([]);
    
    useEffect(() => {
        axios.get(`http://localhost:5000/api/comments/${props.videoId}`)
            .then(response => setComments(response.data))
            }, [props.videoId]);


    
        return (
        <div>    
            <div>
                <ul>
                {comments && comments.map((comment) => {
                    return(
                        <li key={comment}>
                            {comment.text}
                            <AddReply commentId = {comment.id} />
                        </li>     
                    )
                })}
                </ul>
                
            </div>
            

        </div>
    )
}


export default Comment;