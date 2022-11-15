import React from "react";


const ourDate = new Date().getFullYear();
console.log(ourDate);



function Footer(){
    return (
        <footer className="App-footer">
       <span>Copyright ⓒ {ourDate} Rojan</span>
        </footer>
    );
}

export default Footer;