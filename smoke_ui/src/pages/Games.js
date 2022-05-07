import React from "react"
import { useState } from "react";
import GamesTable from "../components/GamesTable"
import SearchBar from "../components/Searchbar";

function Games(){
    const [games, setGames] = useState([]);
    const publishers = ["x", "y", "z"]
    const gameSearchParams = [
        {
            name: "Title",
            type: "text",
            key_name: "title"
        },
        {
            name: "Studio",
            type: "text",
            key_name: "studio"
        },
        {
            name: "Genre",
            type: "text",
            key_name: "genre"
        },

    ]

    const Search = (params) => {
        alert(JSON.stringify(params));
    }

    return(
        <>
        <h1>Games</h1>
        <p>Here you can view games and redirect to pages where you can add, remove, and modify entries.</p>
        <SearchBar title="Search Games" params={gameSearchParams} OnSubmit={Search}></SearchBar>
        <GamesTable games={[1, 2, 3]}/>
        </>
    )
}

export default Games;