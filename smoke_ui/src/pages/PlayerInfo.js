import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import LicenseTable from '../components/LicenseTable';

function PlayerInfo({PlayerToView, pool}){
    const [playerInfo, setPlayerInfo] = useState([]);
    const params = useParams();
    PlayerToView = params.id;

    const GetPlayerInfo = async () =>{
        const req = await fetch(`http://flip2.engr.oregonstate.edu:19866/Players/{"player_id":${PlayerToView}}`);
        const data = await req.json();
        console.log(data);
        setPlayerInfo(data[0]);
    }

    

    const UpdatePlayerInfo  = async(params) => {
        const req = await fetch(`http://flip2.engr.oregonstate.edu:19866/Players/${JSON.stringify(params)}`);
        const data = await req.json();
        console.log(data);
    }


    useEffect(()=>{
        GetPlayerInfo();
    }, [])
    console.log(playerInfo);

    return(
        <>
        <LicenseTable player_id={PlayerToView}/>
        </>
    )
}

export default PlayerInfo;