import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar/searchBar';
import TitleBar from './TitleBar/titleBar';
import Player from './Player/player'
import Comment from './Comment/comment'
import RelatedVideos from './RelatedVideos/relatedVideos';
import axios from 'axios';

const App = () =>{
    const [videoId, setVideoId] = useState ("");

    useEffect(() => {
        axios.get (`https://www.googleapis.com/youtube/v3/search?q=${videoId}&key=AIzaSyBYNAyhrggBV6rpBznjy7m9bMOz3xzghO4`)
        .then(response => setVideoId(response.data))
    }, [videoId]);

    
    return (
        <div>
            <TitleBar />
            <SearchBar />
            <Player videoId = {videoId}/>
            <Comment />
            <RelatedVideos />
        </div>
    )
}

export default App;