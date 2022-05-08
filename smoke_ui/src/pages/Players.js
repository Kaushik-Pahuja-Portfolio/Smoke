import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import PlayerTable from '../components/PlayerTable';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/Searchbar';
import InsertBar from '../components/InsertBar';
import  testplayers from '../test-data/players' 

function Players({setPlayerToView}){
    
    const [players, setPlayers] = useState([]);
    const navigate = useNavigate();

    const defaultPlayer = {username: "kaushik",  email: "pahujak@oregonstate.edu", phone: "1234567890", birthdate: "02/22/2002"}

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

    const Insert = (params) => {
        alert(JSON.stringify(params));
        loadPlayers()
    }

    const onView = (player) => {
        setPlayerToView(player);
        navigate('/PlayerInfo');
    };

    const loadPlayers = async () => {
        //const response = await fetch('/players')
        //const data = await response.json();
        //setPlayers(testplayers);
    }

    useEffect(()=>{
        loadPlayers();
    }, []);

    return(
        <>
        <h2>List of Players</h2>
        <SearchBar title="Search Players" params={playerSearchParams} OnSubmit={Search}></SearchBar>
        <PlayerTable players={players} onView={onView}></PlayerTable>
        <button onClick={()=>{onView(defaultPlayer);return false;}}>select a player </button>
        <InsertBar title="Insert Player" params={playerSearchParams} OnSubmit={Insert}></InsertBar>
        </>
    )
}

export default Players;