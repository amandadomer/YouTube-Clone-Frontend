import React from "react";

function Name(props){
  
    return(
        <div className= "row row-spacer">
            <div className="col-md-12" style={{padding: 0}}>
                <ul>
                   {props.names.map((name)=>{
                       return(
                           <li>{name}</li>
                       )
                   })}
                </ul>
            </div>
        </div>
        );
    }
    
export default Name;
