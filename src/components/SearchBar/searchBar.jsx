import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './searchBar.css';


const SearchBar = (props) => {
    const [search, setSearch] = useState ("");
    const [videoId, setVideoId] = useState ("")

    const handleChange = (event) => {
       setSearch (event.target.value)
    }

    const HandleSubmit = (event) => { 
        event.preventDefault();    
        axios.get(`https://www.googleapis.com/youtube/v3/search?q=${search}&key=AIzaSyCv9Tmp3CSZpF2sPmQOB3tQVY8BqywQs6c`)
                .then((response)=> setVideoId (response.data.items[0].id.videoId))
                .then(() => {
                    props.setVideoId (videoId)
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
        </div>
    );
}

export default SearchBar;