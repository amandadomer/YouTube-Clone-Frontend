import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RelatedVideos = (props) => { 
    const [relatedVideos, setRelatedVideos] = useState([]);
        
    useEffect(() => {
        // axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoId}&type=video&key=AIzaSyCv9Tmp3CSZpF2sPmQOB3tQVY8BqywQs6c`)
        axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=$YQHsXMglC9A`)
            .then(response => setRelatedVideos(response.data.items))
            }, [relatedVideos]);

            return (
                <div>
                    <ul>
                    {relatedVideos && relatedVideos.map((relatedVideo) => {
                        return(
                            <li><iframe id="ytplayer" type="text/html" width="320" height="180"
                            src={`https://www.youtube.com/embed/YQHsXMglC9A?autoplay=1&origin=http://example.com`}
                            frameBorder="0" title="relatedZero"></iframe></li>
                        )    
                    })}
                    </ul>
                </div>
            )
}

// ${relatedVideo.id.videoId}



export default RelatedVideos;