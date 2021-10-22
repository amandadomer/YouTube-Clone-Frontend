import React from 'react';


const Player = (props) => {
    return (
        <iframe id="ytplayer" type="text/html" width="640" height="360"
        src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1&origin=http://example.com`}
        frameBorder="0" title="whatIsPlaying"></iframe>
 
    )
}

export default Player;

