import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar/searchBar';
import TitleBar from './TitleBar/titleBar';
import Player from './Player/player';
import Comment from './Comment/comment';
import RelatedVideos from './RelatedVideos/relatedVideos';
import AddNewComment from './AddNewComment/addNewComment'
import axios from 'axios';

const App = () =>{
    const [videoId, setVideoId] = useState ("GeZZr_p6vB8");

    useEffect(() => {
        axios.get (`https://www.googleapis.com/youtube/v3/search?q=${videoId}&key=AIzaSyCv9Tmp3CSZpF2sPmQOB3tQVY8BqywQs6c`)
        .then(response => setVideoId(response.data))
        .then(console.log(videoId))
    }, [videoId]);

    
    
    return (
      <div className="container">
            <TitleBar />
            <SearchBar setVideoId = {setVideoId}/>
            <Player videoId = {videoId}/>
            <AddNewComment videoId = {videoId} />
            <Comment videoId = {videoId}/>
            <RelatedVideos videoId = {videoId}/>
            
        </div>
    )
}


export default App;