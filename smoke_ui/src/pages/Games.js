import React from "react"
import { useState, useEffect } from 'react';
import GamesTable from "../components/GamesTable"
import SearchBar from "../components/Searchbar";
import InsertBar from '../components/InsertBar';
import testgames from "../test-data/games";
import { useNavigate } from 'react-router-dom';
import { MdPestControlRodent } from "react-icons/md";

function Games({setGameToView, setStudioToView, pool}){
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
            key_name: "Studios.name"
        },
        {
            name: "Genre",
            type: "text",
            key_name: "genre"
        },
    ]

    const loadGames = async () => {
        //pool.query("select * from Games")
        //console.log("select * from Games join Studios using(studio_id)");
        //here we would set games to the result of the query but that refuses to work so i'll do it later.
        const request = await(fetch("http://flip2.engr.oregonstate.edu:19866/Games/{}"));
        const data = await(request.json());
        console.log(data);
        setGames(data);
    }

    const Search = async (params) => {
        const request = await(fetch(`http://flip2.engr.oregonstate.edu:19866/Games/${JSON.stringify(params)}`));
        const data = await(request.json());
        console.log(data);
        setGames(data);
        /*pool.query(sql, function(error, results) {
            if(error) throw error;
            else{
                setGames(results)
            }
        });*/
    }

    const Insert = (params) => {
        alert(JSON.stringify(params));
        let sql = "INSERT INTO Games "
        if(Object.keys(params).length != 0){
            sql += '('
            Object.keys(params).forEach((param, index) => {
                if(index !== 0) sql += " ";
                sql += `${param}, `;
            });
            sql = sql.slice(0, -2);
            sql += ') VALUES '
            Object.keys(params).forEach((param, index) => {
                if(index !== 0) sql += " ";
                sql += `${params[param]}, `;
            });
            sql = sql.slice(0, -2);
        }
        sql.concat(";");
        console.log(sql);
        loadGames();
    }

    const onView = (game) => {
        setGameToView(game);
        navigate('/GameInfo');
    };

    useEffect(()=>{
        loadGames();
    }, []);
    return(
        <>
        <h1>Games</h1>
        <p>Here you can view games and redirect to pages where you can add, remove, and modify entries.</p>
        <SearchBar title="Search Games" params={gameSearchParams} OnSubmit={Search}></SearchBar>
        <GamesTable games={games} setStudio={setStudioToView} onView={onView}/>
        <InsertBar title="Insert Game" params={gameSearchParams} OnSubmit={Insert}></InsertBar>
        </>
    )
}

export default Games;