import React from 'react';
import SearchBar from './SearchBar/searchBar';
import TitleBar from './TitleBar/titleBar';
import Player from './Player/player'
import Comment from './Comment/comment'


function App(){
    return (
        <div>
            <TitleBar />
            <SearchBar />
            <Player />
            <Comment />
        </div>
    )
}

export default App;