import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function PlayerInfo({playerToView}){
    const [username, setUsername] = useState(playerToView.name);
    const [email, setEmail] = useState(playerToView.reps);
    const [phone, setPhone] = useState(playerToView.weight);
    const [birthdate, setBirthdate] = useState(playerToView.unit);

    const history = useNavigate();

    const editPlayer = async () => {
        const editedPlayer = {username, email, phone, birthdate}
        const response = await fetch(`/players/${playerToView.player_id}`, {
            method: 'PUT',
            body: JSON.stringify(editedPlayer),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if(response.status === 200){
            alert('Successfully edited the player');
        } else{
            alert(`Falied to edit player, status code = ${response.status}`);
        }
        history.push('/')
    };


    return(
        <div>
            <h1>Edit player</h1>
            <input
                type="text"
                placeholder="Enter username here"
                value={username}
                onChange={e => setUsername(e.target.value)} />
            <input
                type="text"
                value={email}
                placeholder="Enter email here"
                onChange={e => setEmail(e.target.value)} />
            <input
                type="number"
                placeholder="Enter phone number here"
                value={phone}
                onChange={e => setPhone(e.target.value)} />
            <input
                type="text"
                placeholder="Enter DOB here"
                value={birthdate}
                onChange={e => setBirthdate(e.target.value)} />
            <button
                onClick={editPlayer}
            >Save</button>
        </div>
    );
}

export default PlayerInfo;