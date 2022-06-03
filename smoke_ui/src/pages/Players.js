import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import PlayerTable from '../components/PlayerTable';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/Searchbar';
import InsertBar from '../components/InsertBar';
import  testplayers from '../test-data/players' 
import PORT from '../port';

function Players(){
    
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

    const playerInsertParams = [
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
        const response = await(fetch(`http://flip2.engr.oregonstate.edu:${PORT}/Players/{}`));
        const data = await(response.json());
        console.log('Player List Message:')
        console.log(data);
        setPlayers(data);
        //here we should query and set the Players to the result.
    }

    const Search = async (params) => {
        const response = await(fetch(`http://flip2.engr.oregonstate.edu:${PORT}/Players/${encodeURIComponent(JSON.stringify(params))}`));
        const data = await(response.json());
        setPlayers(data);
    }

    const Insert = async (params) => {
        const request = await(fetch(`http://flip2.engr.oregonstate.edu:${PORT}/Players-Insert/${encodeURIComponent(JSON.stringify(params))}`));
        console.log(await(request))
        loadPlayers();
    }

    const onView = (player) => {
        navigate(`/PlayerInfo/${player}`);
    };

    const onDelete = async (player) => {
        const request = await(fetch(`http://flip2.engr.oregonstate.edu:${PORT}/Players-Delete/${player.player_id}`));
        loadPlayers();
    };

    useEffect(()=>{
        loadPlayers();
    }, []);

    return(
        <>
        <h2>List of Players</h2>
        <SearchBar title="Search Players" params={playerSearchParams} OnSubmit={Search}></SearchBar>
        <PlayerTable players={players} onView={onView} onDelete={onDelete}></PlayerTable>
        <SearchBar title="Insert Player" params={playerInsertParams} OnSubmit={Insert}></SearchBar>
        </>
    )
}

export default Players;