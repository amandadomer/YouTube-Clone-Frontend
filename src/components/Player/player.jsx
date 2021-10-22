import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Player = (props) => {
    const [videoId, setVideoId] = useState({});
    useEffect(() => {
        axios.get (`https://www.googleapis.com/youtube/v3/search?q=${videoId}&key={apiKey}`)
            .then(response => setVideoId(response.data))
            }, []);

            return (
                <iframe id="ytplayer" type="text/html" width="640" height="360"
                src={`https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com`} frameBorder="0"></iframe>
 
    )
}

export default Player;