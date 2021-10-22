import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RelatedVideos = (props) => { 
    const [relatedVideos, setRelatedVideos] = useState([]);
        
    useEffect(() => {
        axios.get('https://www.googleapis.com/youtube/v3/search?relatedToVideoId=YErFwJX0HKE&type=video&key=AIzaSyBvJRwQAbHRW06feqhuKZGcwGRv8vdzHjI')
            .then(response => setRelatedVideos(response.data))
            }, []);
    
        return (
                <div>
                    <tbody>
                    {relatedVideos && relatedVideos.map((relatedVideo) => {
                        return(
                            <tr key={relatedVideo.id} >
                                <td>{relatedVideo.text}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </div>
    )
}

export default RelatedVideos;