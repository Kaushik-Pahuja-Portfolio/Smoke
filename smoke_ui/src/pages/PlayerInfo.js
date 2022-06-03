import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import LicenseTable from '../components/LicenseTable';
import PORT from '../port';

function PlayerInfo({PlayerToView}){
    const [playerInfo, setPlayerInfo] = useState([]);

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();

    const params = useParams();
    PlayerToView = params.id;

    const GetPlayerInfo = async () =>{
        let url = `http://flip2.engr.oregonstate.edu:${PORT}/Players/{"player_id":${PlayerToView}}`;
        console.log(url);
        const req = await fetch(url);
        const data = await req.json();
        console.log(data);
        setPlayerInfo(data[0]);
        setEmail(undefined);
        setUsername(undefined);
        setPhone(undefined);
    }

    const UpdatePlayerInfo  = async() => {
        let params = {};
        if(username !== undefined) params.username = username;
        if(email !== undefined) params.email = email;
        if(phone !== undefined) params.phone = phone;
        params.player_id = playerInfo.player_id;
        const req = await fetch(`http://flip2.engr.oregonstate.edu:${PORT}/Players-Update/${JSON.stringify(params)}`);
        const data = await req.json();
        //GetPlayerInfo();
        console.log(data);
    }

    useEffect(()=>{
        
        GetPlayerInfo();
    }, [])

    return(
        <>
        <LicenseTable player_id={PlayerToView} port={PORT}/>
        <div>
            <h1>{playerInfo.username}</h1>
            <label for="username">Username</label>
            <input
                type="text"
                id="username"
                placeholder={playerInfo.username}
                value={username}
                onChange={e => {setUsername(e.target.value === "" ? undefined : e.target.value);}} />
            <label for="email">Email</label>
            <input
                type="text"
                id="email"
                value={email}
                placeholder={playerInfo.email}
                onChange={e => {setEmail(e.target.value === "" ? undefined : e.target.value)}} />
            <label for="phone">Phone #</label>
            <input
                type="number"
                id="phone"
                placeholder={playerInfo.phone}
                value={phone}
                onChange={e => setPhone(e.target.value === "" ? undefined : e.target.value)} />
            <button
                onClick={()=>{
                    UpdatePlayerInfo();
                    setUsername("");
                    setEmail("");
                    setPhone("");
                    GetPlayerInfo();
                }}
            >Save</button>
          </div>
        </>
    )
}

export default PlayerInfo;