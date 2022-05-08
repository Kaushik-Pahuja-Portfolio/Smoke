import React from "react";
import GamesRow from "./GamesRow"

function GamesTable({games, onView}){
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
                    onView={onView}
                    key={i} />)}
            </tbody>
        </table>
        </>
    )
}

export default GamesTable;