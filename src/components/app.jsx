import React from 'react';
import SearchBar from './SearchBar/searchBar';
import TitleBar from './TitleBar/titleBar';
import Player from './Player/player'


function App(){
    return (
        <div>
            <TitleBar />
            <SearchBar />
            <Player />
        </div>
    )
}

export default App;