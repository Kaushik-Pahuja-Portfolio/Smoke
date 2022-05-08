import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import LicenseTable from '../components/LicenseTable';

function PlayerInfo({playerToView}){
    
    const [username, setUsername] = useState(playerToView.name);
    const [email, setEmail] = useState(playerToView.email);
    const [phone, setPhone] = useState(playerToView.phone);
    const [birthdate, setBirthdate] = useState(playerToView.birthdate);

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

    const PlayerLicenses  = [
        {
            game: "Return of the Obra Dinn",
            purchase_date: "01/22/2020",
            purchase_price: "$30.00",
            valid: "true"
        }
    ]
    return(
        <>
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
        <div>
            <h3>Licenses Owned</h3>
            <LicenseTable licenses={PlayerLicenses}/>
        </div>
        </>
    );
}

export default PlayerInfo;