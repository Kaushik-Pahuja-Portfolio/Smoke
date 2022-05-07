import React from "react"
import GamesTable from "../components/GamesTable"

function Games(){
    return(
        <>
        <h1>Games</h1>
        <p>Here you can view games and redirect to pages where you can add, remove, and modify entries.</p>
        <GamesTable games={[1, 2, 3]}/>
        </>
    )
}

export default Games;