import React from "react";

function Note(props){
    return (
        <div className="App-Note">
       <h1>{props.title}</h1>
       <p>{props.content}</p>
        </div>
    );
}




export default Note;