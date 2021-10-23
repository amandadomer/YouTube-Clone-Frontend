import React, {useState, useEffect} from 'react'
import axios from 'axios';

const NewComment = (props) => {
    
    const [text, setText] = useState ("");
    const [videoId, setVideoId] = useState ("");
    const [newComment, setNewComment] = useState ("")

    const handleChange = (event) => {
       setNewComment(event.target.value)
    }

    const addNewComment = (newComment) => {
        return(
            axios.post(`http://localhost:5000/api/comments/YQHsXMglC9A`)
            .then(response => (response.data) )
            .then(console.log (newComment))
        )
    }

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        const newComment = {
           text: text,
           videoId: "YQHsXMglC9A",
        }
        addNewComment(text);

    }
  

    return (
        <div id = "bar">
            <form>
                <div className= "row form-group">
                    <div className= "col">
                        <input type="text" className="form-control" id="search_field" onChange={handleChange} placeholder="Add a comment" rows="1"/>
                        <button onClick={handleCommentSubmit}>Submit comment</button>                    
                        </div>
                </div>
                
            </form>
        </div>
    );
}

export default NewComment;