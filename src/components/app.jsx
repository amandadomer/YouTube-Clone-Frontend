import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar/searchBar';
import TitleBar from './TitleBar/titleBar';
import Player from './Player/player'
import Comment from './Comment/comment'


const App = () =>{
    const [videoId, setVideoId] = useState;

    return (
        <div>
            <TitleBar />
            <SearchBar />
            <Player />
            <Comment />
            <SearchBar setVideoId/>
        </div>
    )
}

export default App;