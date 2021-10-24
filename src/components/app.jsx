import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar/searchBar';
import NewComment from './AddNewComment/addNewComment';
import TitleBar from './TitleBar/titleBar';
import Player from './Player/player';
import Comment from './Comment/comment';
import RelatedVideos from './RelatedVideos/relatedVideos';
import axios from 'axios';

const App = () =>{
    const [videoId, setVideoId] = useState ("1EQg9kV6f98");
    const [comment, setComment] = useState ("");
    const [reply, setReply] = useState (null);

    useEffect(() => {
        axios.get (`https://www.googleapis.com/youtube/v3/search?q=${videoId}&key=AIzaSyCv9Tmp3CSZpF2sPmQOB3tQVY8BqywQs6c`)
        .then(response => setVideoId(response.data))
        .then(console.log(videoId))
    }, [videoId]);

    
    return (
        <div>
            <TitleBar />
            <SearchBar setVideoId = {setVideoId}/>
            <Player videoId = {videoId}/>
            <NewComment />
            <Comment videoId = {videoId}/>
            <RelatedVideos videoId = {videoId}/>
        </div>
    )
}

export default App;