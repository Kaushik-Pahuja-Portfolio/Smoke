import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import PlayerTable from '../components/PlayerTable';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/Searchbar';
import InsertBar from '../components/InsertBar';
import  testplayers from '../test-data/players' 

function Players({setPlayerToView, sql_conn}){
    
    const [players, setPlayers] = useState([]);
    const navigate = useNavigate();

    const playerSearchParams = [
        {
            name: "Username",
            type: "text",
            key_name: "Players.username"
        },
        {
            name: "E-mail",
            type: "text",
            key_name: "Players.email"
        },
        {
            name: "Phone",
            type: "number",
            key_name: "Players.phone"
        },
        {
            name: "DOB",
            type: "text",
            key_name: "Players.birthdate"
        },
    ]

    const loadPlayers = async () => {
        const response = await(fetch('http://flip2.engr.oregonstate.edu:19866/Players/{}'));
        const data = await(response.json());
        setPlayers(data);
        console.log(data);
        //here we should query and set the Players to the result.
    }

    const Search = async (params) => {
        const response = await(fetch(`http://flip2.engr.oregonstate.edu:19866/Players/${JSON.stringify(params)}`));
        const data = await(response.json());
        setPlayers(data);
    }

    const Insert = (params) => {
        alert(JSON.stringify(params));
        alert(JSON.stringify(params));
        let sql = "INSERT INTO Players "
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
        loadPlayers()
    }

    const onView = (player) => {
        setPlayerToView(player);
        navigate('/PlayerInfo');
    };

    const onDelete = async (player) => {
        const request = await(fetch(`http://flip2.engr.oregonstate.edu:19866/Players-Delete/${player.player_id}`));
        loadStudios();
    };

    useEffect(()=>{
        loadPlayers();
    }, []);

    return(
        <>
        <h2>List of Players</h2>
        <SearchBar title="Search Players" params={playerSearchParams} OnSubmit={Search}></SearchBar>
        <PlayerTable players={players} onView={onView} onDelete={onDelete}></PlayerTable>
        <button onClick={()=>{setPlayerToView({player_id: 1, username: "asdf", email: "fdsa", phone: "0123456789", birthdate: "11/11/1111"}); return false;}}>select a player </button>
        <InsertBar title="Insert Player" params={playerSearchParams} OnSubmit={Insert}></InsertBar>        </>
    )
}

export default Players;