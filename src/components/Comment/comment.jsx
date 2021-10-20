import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Comment = (props) => {
    const [videoId, setVideoId] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5000/api/comments')
            .then(response => setVideoId(response.data[props.index])
        )}, [videoId, props.index]);

    // return (

}

export default Comment;