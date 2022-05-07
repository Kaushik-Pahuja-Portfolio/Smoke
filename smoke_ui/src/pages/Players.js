import React from 'react';
import { Link } from 'react-router-dom';
import PlayerTable from '../components/PlayerTable';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Players({setPlayerToView}){
    
    const [players, setPlayers] = useState([]);
    const history = useNavigate();

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
        <PlayerTable players={players} onView={onView}></PlayerTable>
        </>
    )
}

export default Players;