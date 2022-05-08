import React from "react"
import { useState, useEffect } from 'react';
import GamesTable from "../components/GamesTable"
import SearchBar from "../components/Searchbar";
import InsertBar from '../components/InsertBar';
import testgames from "../test-data/games";
import { useNavigate } from 'react-router-dom';

function Games({setGameToView}){
    const [games, setGames] = useState([]);
    const navigate = useNavigate();

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

    const Insert = (params) => {
        alert(JSON.stringify(params));
    }

    const onView = (game) => {
        setGameToView(game);
        navigate('/GameInfo');
    };

    const loadGames = async () => {
        setGames(testgames);
    }

    useEffect(()=>{
        loadGames();
    }, []);

    return(
        <>
        <h1>Games</h1>
        <p>Here you can view games and redirect to pages where you can add, remove, and modify entries.</p>
        <SearchBar title="Search Games" params={gameSearchParams} OnSubmit={Search}></SearchBar>
        <GamesTable games={games} onView={onView}/>
        <InsertBar title="Insert Game" params={gameSearchParams} OnSubmit={Insert}></InsertBar>
        </>
    )
}

export default Games;