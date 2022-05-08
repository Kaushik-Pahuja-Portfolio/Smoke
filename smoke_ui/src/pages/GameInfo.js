import React from "react"
import GenreTable from "../components/GenreTable";

function GameInfo({game}){
    return(
        <>
        <div>
            <h1>{game.title}</h1>
            <p>From {game.studio}, released on {game.release_date}. You can find it on <a href={game.store_page}>their store page</a></p>
            <GenreTable game={game}/>
        </div>
        </>
    )
}

export default GameInfo;