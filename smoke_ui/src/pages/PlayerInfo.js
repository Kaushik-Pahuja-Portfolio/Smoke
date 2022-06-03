import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import LicenseTable from '../components/LicenseTable';

function PlayerInfo({PlayerToView, pool}){
    const [playerInfo, setPlayerInfo] = useState([]);
    const [licenses, setLicenses] = useState([]);
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
        setLicenses(data);
    }

    const UpdatePlayerInfo  = async(params) => {
        const req = await fetch(`http://flip2.engr.oregonstate.edu:19866/Players/${JSON.stringify(params)}`);
        const data = await req.json();
        console.log(data);
    }

    const CreateLicense = async(params) =>{
        const req = await fetch(`http://flip2.engr.oregonstate.edu:19866/Licenses-Insert/${JSON.stringify(params)}`);
        const data = await req.json();
        console.log(data);
    }

    const DeleteLicense = async(game_id) => {
        let params = {};
        params.player_id = PlayerToView;
        params.game_id = game_id;
        const req = await fetch(`http://flip2.engr.oregonstate.edu:19866/Licenses-Delete/${JSON.stringify(params)}`);
        const data  = await req.json();
        console.log(data);
    }

    useEffect(()=>{
        GetPlayerInfo();
        GetLicenses();
    }, [])

    console.log(licenses);
    console.log(playerInfo);

    return(
        <>
        <LicenseTable licenses={licenses} onDeleteLicense={DeleteLicense}/>
        </>
    )
}

export default PlayerInfo;