import React from "react";
import settingsImg from "../assets/images/Settings.svg";
import hashtagImg from "../assets/images/Hashtag.svg";

export default function NavigationBar(){
    return(
        <div id='navigationBar'>
            <div>Logo</div>
            <div>
                <img src={hashtagImg} />  
                <div>Expolore</div>
            </div>
            <div>
            <img src={settingsImg} />
                <div>Settings</div>
            </div>
        </div>
    )
}