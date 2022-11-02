import React from "react";
import NavigationBar from "../components/NavigationBar";
import SearchBar from "../components/SearchBar";
import NewUserCTA from "../components/NewUserCTA";
import Trends from "../components/Trends";

export default function Home(){
    return(
        <div id='homeContainer'>
            <NavigationBar />
            <SearchBar />
            <NewUserCTA />
            <Trends />
        </div>
    )
}