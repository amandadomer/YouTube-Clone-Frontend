import React, { useState } from 'react';
import './searchBar.css';


const SearchBar = (props) => {
    const [search, setSearch] = useState ("");
    const [videoId, setVideoId] = useState ("")

    const handleChange = (event) => {
       setSearch (event.target.value)
    }

    const HandleSubmit = (event) => { 
        event.preventDefault();    
        axios.get(`https://www.googleapis.com/youtube/v3/search?q=${search}&key=AIzaSyCRMqb6wCFo3iFxs9wcDZDBIRYHXsvs4Fo`)
                .then((response)=> setVideoId (response.data.items[0].id.videoId))
                .then(() => {
                    props.setVideoId (videoId)
                    console.log(videoId)
                })

    }
    

    return (
        <div id = "bar">
            <form onSubmit = {HandleSubmit}>
                <div className= "row form-group">
                    <div className= "col">
                        <input type="text" className="form-control" id="search_field" onChange={handleChange} placeholder="Type here..." rows="1"/>
                        <button type = "submit"> Search</button>
                    </div>
                </div>
                
            </form>
    );
}

export default SearchBar;