import React from "react";
import GamesRow from "./GamesRow"

function GamesTable({games, setStudio, onView}){
    return(
        <>
        <table>
            <thead>
                    <th>Title</th>
                    <th>Studio</th>
                    <th>Year</th>
                    <th>Store Page</th>
                    <th></th>
            </thead>
            <tbody>
            {games.map((game, i) => <GamesRow game={game}
                    setStudio={setStudio}
                    onView={onView}
                    key={i} />)}
            </tbody>
        </table>
        </>
    )
}

export default GamesTable;