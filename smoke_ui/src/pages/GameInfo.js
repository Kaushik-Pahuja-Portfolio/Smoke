import React, { useState, useEffect } from "react";
import GenreTable from "../components/GenreTable";
import {useParams} from "react-router-dom";

function GameInfo({game, pool}){
    let handle = useParams();
    if(handle.id != undefined) game = handle.id;

    
    const [gameInfo, SetGameInfo] = useState([]);
    
    const LoadGameInfo = async () => {
        const request = await fetch(`http://flip2.engr.oregonstate.edu:19866/Games/{"game_id": ${game}}`);
        const data  = await request.json();
        console.log(data);
        SetGameInfo(data[0]);
    }

    useEffect(()=>{
        console.log(`game_id: ${game}`);
        LoadGameInfo();
    }, [handle])

    return(
        <>
        <div>
            <h1>{gameInfo.title}</h1>
            <p>From {gameInfo.studio}, released on {gameInfo.release_date}. You can find it on <a href={gameInfo.store_page}>their store page</a></p>
            <GenreTable game={game}/>
        </div>
        </>
    )
}

export default GameInfo;