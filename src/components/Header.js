import React from "react";
import logo from "../images/troll-face.png";
import emoji from "../images/emoji.png";

function Header(){
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="header-image"></img>
            <h3 className="header-title">Meme Generator</h3>
            <img src={emoji} alt="Emoji" className="header-image"></img>
        </header>
    );
}

export default Header;