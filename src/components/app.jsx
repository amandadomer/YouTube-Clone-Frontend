import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar/searchBar';
import TitleBar from './TitleBar/titleBar';
import Player from './Player/player';
import Comment from './Comment/comment';
import RelatedVideos from './RelatedVideos/relatedVideos';
import AddNewComment from './AddNewComment/addNewComment'
import axios from 'axios';

const App = () =>{
    const [videoId, setVideoId] = useState ("YQHsXMglC9A");

    useEffect(() => {
        axios.get (`https://www.googleapis.com/youtube/v3/search?q=${videoId}&key=AIzaSyDoxGnUT01yftGL-B79p82VjDPIZ6qC8DY`)
        .then(response => setVideoId(response.data))
        .then(console.log(videoId))
    }, []);
    
        
    return (
      <div class="container"> 
        <TitleBar />
        <SearchBar setVideoId = {setVideoId}/><Player videoId = {videoId}/> 
          <div class="row">
          <div class="col-sm-8"> 
              <AddNewComment videoId = {videoId} />
              <Comment videoId = {videoId}/>
          </div>
          <div class="col-sm-4">
              <RelatedVideos videoId = {videoId}/>
          </div>
        </div>
      </div>
    )};

export default App;