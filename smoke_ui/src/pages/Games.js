import React from "react"
import { useState, useEffect } from 'react';
import GamesTable from "../components/GamesTable"
import SearchBar from "../components/Searchbar";
import InsertBar from '../components/InsertBar';
import testgames from "../test-data/games";
import { useNavigate } from 'react-router-dom';
import { MdGeneratingTokens, MdPestControlRodent } from "react-icons/md";
import PORT from "../port";

function Games({setGameToView}){
    const [games, setGames] = useState([]);
    const [genres, setGenres] = useState([]);
    const navigate = useNavigate();

    const gameSearchParams = [
        {
            name: "Title",
            type: "text",
            key_name: "Games.title"
        },
        {
            name: "Studio",
            type: "text",
            key_name: "Studios.name"
        },
        {
            name: "Genre",
            type: "select",
            options: genres,
            key_name: "GamesGenres.genre"
        },
    ]
    const loadGames = async () => {
        //pool.query("select * from Games")
        //console.log("select * from Games join Studios using(studio_id)");
        //here we would set games to the result of the query but that refuses to work so i'll do it later.
        const request = await(fetch(`http://flip2.engr.oregonstate.edu:${PORT}/Games/{}`));
        const data = await(request.json());
        console.log(data);
        setGames(data);
    }

    const loadGenres = async()=>{
        const req = await fetch(`http://flip2.engr.oregonstate.edu:${PORT}/Genres/`);
        const data = await req.json();
        console.log(data);
        setGenres(data);
        console.log(genres);
    }

    const Search = async (params) => {
        const request = await(fetch(`http://flip2.engr.oregonstate.edu:${PORT}/Games/${encodeURIComponent(JSON.stringify(params))}`));
        const data = await(request.json());
        console.log(data);
        setGames(data);
    }

    const Insert = async (params) => {
        const request = await(fetch(`http://flip2.engr.oregonstate.edu:${PORT}/Games-Insert/${encodeURIComponent(JSON.stringify(params))}`));
        console.log(await(request));
        loadGames();
    }

    const onView = (game) => {
        setGameToView(game);
        navigate('/GameInfo');
    };

    useEffect(()=>{
        loadGames();
        loadGenres();
    }, []);

    return(
        <>
        <h1>Games</h1>
        <p>Here you can view games and redirect to pages where you can add, remove, and modify entries.</p>
        <SearchBar title="Search Games" params={gameSearchParams} OnSubmit={Search}></SearchBar>
        <GamesTable games={games} onAdd={Insert} PORT={PORT}/>
        </>
    )
}

export default Games;