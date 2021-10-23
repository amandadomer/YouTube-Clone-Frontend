import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar/searchBar';
import TitleBar from './TitleBar/titleBar';
import Player from './Player/player';
import Comment from './Comment/comment';
import RelatedVideos from './RelatedVideos/relatedVideos';
import axios from 'axios';
import AddComment from './Comment/addComment';

const App = () =>{
    const [videoId, setVideoId] = useState ("1EQg9kV6f98");

    useEffect(() => {
        axios.get (`https://www.googleapis.com/youtube/v3/search?q=${videoId}&key=AIzaSyAAiHVRecDLjPkaI_CCi4FLoosrYz3F33M`)
        .then(response => setVideoId(response.data))
    }, [videoId]);

    
    return (
        <div>
            <TitleBar />
            <SearchBar setVideoId = {setVideoId}/>
            <Player videoId = {videoId}/>
            <AddComment />
            <Comment videoId = {videoId}/>
            <RelatedVideos videoId = {videoId}/>
        </div>
    )
}

export default App;