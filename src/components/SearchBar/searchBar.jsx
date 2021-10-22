import React, { useState } from 'react';
import './searchBar.css';


const SearchBar = (props) => {
   const [search, setSearch] = useState ("");
    const handleChange = (event) => {
        setSearch(event.target.value);
        console.log(search)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(search);
    }
    return (
            <form onSubmit={handleSubmit}>
                <div className= "row form-group">
                    <div className= "col">
                        <input type="text" className="form-control" id="search_field" onChange={handleChange} placeholder="Type here..." rows="1"/>
                <button type="submit"  class="btn btn-dark">Search</button>
                    </div>
                </div>
            </form>
    );
}

export default SearchBar;