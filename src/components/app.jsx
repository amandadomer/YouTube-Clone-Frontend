import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar/searchBar';
import TitleBar from './TitleBar/titleBar';
import Player from './Player/player'
import Comment from './Comment/comment'
import RelatedVideos from './RelatedVideos/relatedVideos';
import axios from 'axios';

const App = () =>{
    const [videoId, setVideoId] = useState ("");

    // useEffect(() => {
    //     axios.get (`https://www.googleapis.com/youtube/v3/search?q=${videoId}&key=AIzaSyB_5_raFN-x13Hozq1vichWGp10uOfvRxQ`)
    //     .then(response => setVideoId(response.data))
    // }, [videoId]);

    
    return (
        <div>
            <TitleBar />
            <SearchBar setVideoId = {setVideoId}/>
            <Player videoId = {videoId}/>
            <Comment setVideoId = {setVideoId}/>
            <RelatedVideos setVideoId = {setVideoId}/>
        </div>
    )
}

export default App;