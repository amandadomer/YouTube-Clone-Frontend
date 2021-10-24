import React, { useState, useEffect } from 'react';
import ApiKey from '../../apikey/ApIKey/apiKey';
import axios from 'axios';

const RelatedVideos = (props) => { 
    const [relatedVideos, setRelatedVideos] = useState([]);
        
    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoId}&type=video&key=AIzaSyDoxGnUT01yftGL-B79p82VjDPIZ6qC8DY`)
            .then(response => setRelatedVideos(response.data.items))
            }, [props.videoId]);

            return (
                <div>
                    <ul>
                    {relatedVideos && relatedVideos.map((relatedVideo) => {
                        return(
                            <li key = {relatedVideo}><iframe id="ytplayer" type="text/html" width="320" height="180"
                            src={`https://www.youtube.com/embed/${relatedVideo.id.videoId}?autoplay=1&origin=http://example.com`}
                            frameBorder="0" title="relatedZero"></iframe></li>
                        )    
                    })}
                    </ul>
                </div>
            )
}

export default RelatedVideos;