import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RelatedVideos = (props) => { 
    const [relatedVideos, setRelatedVideos] = useState([]);
        
    useEffect(() => {
        axios.get('https://www.googleapis.com/youtube/v3/search?relatedToVideoId=YErFwJX0HKE&type=video&key=AIzaSyCRMqb6wCFo3iFxs9wcDZDBIRYHXsvs4Fo')
            .then(response => setRelatedVideos(response.data.items))
            }, []);
    
        return (
                <div>
                    <ul>
                    {relatedVideos && relatedVideos.map((relatedVideo) => {
                        return(
                            <li> {relatedVideo.id.videoId} </li>
                        )
                    })}
                    </ul>
                </div>
    )
}



export default RelatedVideos;