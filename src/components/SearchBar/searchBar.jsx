import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './searchBar.css';




    const SearchBar (props) {
      return (
            <div id = "bar">
                <form className="form-inline">
                    <div className= "row form-group">
                        <div className= "col">
                            <input type="text" className="form-control" id="search_field" onChange={props.handleSearch} placeholder="Type here..." rows="1"/>
                        </div>
                        <div className="col-sm-2">
                        </div>
                        
                    </div>
                </form>
            </div>
      );
  }

// const SearchBar = (props) => {
//     const [searchs, setSearch] = useState({});
    
//     useEffect(() => {
//         axios.get(`https://www.googleapis.com/youtube/v3/search?q=spaceboy&key=AIzaSyBvJRwQAbHRW06feqhuKZGcwGRv8vdzHjI`)
//             .then(response => setSearch(response.data))
//             }, []);
//     return(        
//         <div>
//             {searchs && searchs.map((search) => {
//                 return(
//                     <tr key={search.id} >
//                         <td>{search.videoId}</td>
//                     </tr>
//                 )
//             })}
//         </div>
//     )                  
// };

export default SearchBar;