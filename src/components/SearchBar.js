import React from "react";
import searchImg from "../assets/images/Search.svg"

export default function SearchBar(){
    return(
        <div id='searchBarContainer'>
            <div id="searchBar">
                <img src={searchImg} />
                <input type='text' placeholder='Search Twitter'/>
            </div>
        </div>
    )
}