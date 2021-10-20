import React from 'react';
import axios from 'axios';

// const 
//     const [videoId, setVideoId] = useState({});

// useEffect(() => 
//     axios.get {https://www.googleapis.com/youtube/v3/search?q=${videoId}&key={apiKey}
//         .then(response => setPlayer())
// }

function Player () {
    return (
        <iframe id="ytplayer" type="text/html" title="video test" width="640px" height="360px"
        src="https://www.youtube.com/embed/M7lc1UVf-VE"
        frameborder="0"></iframe>
    )
}

export default Player;