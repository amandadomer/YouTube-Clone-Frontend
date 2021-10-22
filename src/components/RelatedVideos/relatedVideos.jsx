import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RelatedVideos = (props) => { 
    const [relatedVideos, setRelatedVideos] = useState([]);
        
    useEffect(() => {
        axios.get('https://www.googleapis.com/youtube/v3/search?relatedToVideoId=YErFwJX0HKE&type=video&key=AIzaSyB_5_raFN-x13Hozq1vichWGp10uOfvRxQ')
            .then(response => setRelatedVideos(response.data.items))
            .then(() => console.log(relatedVideos))
            }, [relatedVideos]);
    
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