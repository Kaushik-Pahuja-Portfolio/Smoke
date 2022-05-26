import React from "react"
import { useState, useEffect } from 'react';
import GamesTable from "../components/GamesTable"
import SearchBar from "../components/Searchbar";
import InsertBar from '../components/InsertBar';
import testgames from "../test-data/games";
import { useNavigate } from 'react-router-dom';
import { MdPestControlRodent } from "react-icons/md";

function Games({setGameToView, pool}){
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
        let sql = "select * from Games "
        if(Object.keys(params).length != 0){
            console.log(Object.keys(params).length)
            sql += "where "
            Object.keys(params).forEach((param, index) => {
                if(index !== 0) sql += "and ";
                sql += `${param} = ${params[param]} `;
            });
        }
        sql.concat(";");
        console.log(sql);
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

    const loadGames = async () => {
        //pool.query("select * from Games")
        console.log("select * from Games");
        //here we would set games to the result of the query but that refuses to work so i'll do it later.
        const request = await(fetch("/select * from Games;"));
        const data = await(request.json());
        setGames(data);
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