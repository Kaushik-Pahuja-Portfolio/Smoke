import React from 'react';
import { Link } from 'react-router-dom';
import PlayerTable from '../components/PlayerTable';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Players({setPlayerToView}){
    
    const [players, setPlayers] = useState([]);
    const history = useNavigate();

    const playerSearchParams = [
        {
            name: "Username",
            type: "text",
            key_name: "username"
        },
        {
            name: "E-mail",
            type: "text",
            key_name: "email"
        },
        {
            name: "Phone",
            type: "number",
            key_name: "phone"
        },
        {
            name: "DOB",
            type: "text",
            key_name: "birthdate"
        },
    ]

    const Search = (params) => {
        alert(JSON.stringify(params));
    }

    const onView = (player) => {
        setPlayerToView(player);
        history.push('/PlayerInfo');
    };

    const loadPlayers = async () => {
        const response = await fetch('/players')
        const data = await response.json();
        setPlayers(data);
    }

    useEffect(()=>{
        loadPlayers();
    }, []);

    return(
        <>
        <h2>List of Players</h2>
        <SearchBar title="Search Players" params={playerSearchParams} OnSubmit={Search}></SearchBar>
        <PlayerTable players={players} onView={onView}></PlayerTable>
        </>
    )
}

export default Players;