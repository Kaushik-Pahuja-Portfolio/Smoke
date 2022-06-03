import React, { useState, useEffect } from "react"
import GenreTable from "../components/GenreTable";

function GameInfo({game, pool}){
    const [gameInfo, SetGameInfo] = useState([]);
    
    const LoadGameInfo = async () => {
        const request = await fetch(`http://flip2.engr.oregonstate.edu:19866/Games/{"game_id": ${game}}`);
        const data  = await request.json();
        console.log(data);
        SetGameInfo(data[0]);
    }

    useEffect(()=>{
        LoadGameInfo();
    }, [])

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