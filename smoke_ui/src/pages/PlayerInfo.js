import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import LicenseTable from '../components/LicenseTable';

function PlayerInfo({PlayerToView, pool}){
    const [playerInfo, setPlayerInfo] = useState();
    const [licenses, setLicenses] = useState();
    const params = useParams();
    PlayerToView = params.id;

    const GetPlayerInfo = async () =>{
        const req = await fetch(`http://flip2.engr.oregonstate.edu:19866/Players/{"player_id":${PlayerToView}}`);
        const data = await req.json();
        console.log(data);
        setPlayerInfo(data[0]);
    }

    const GetLicenses = async () => {
        const req = await fetch(`http://flip2.engr.oregonstate.edu:19866/Licenses/{"player_id": ${PlayerToView}}`);
        const data = await req.json();
        console.log(data)
        setLicenses(data);
    }

    useEffect(()=>{
        GetPlayerInfo();
        GetLicenses();
    }, [])


    return(
        <>
        hello
        </>
    )
}

export default PlayerInfo;