import React from "react";

export default function NavigationBar(){
    return(
        <div id='navigationBar'>
            <div>Logo</div>
            <div>
                <img src={require('../assets/images/Hashtag.png')} />  
                <div>Expolore</div>
            </div>
            <div>
                <img src={require('../assets/images/Settings.png')} />
                <div>Settings</div>
            </div>
        </div>
    )
}