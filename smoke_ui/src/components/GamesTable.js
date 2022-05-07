import React from "react";
import GamesRow from "./GamesRow"

function GamesTable({games}){
    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Studio</th>
                    <th>Year</th>
                    <th>Genres</th>
                    <th>Store Page</th>
                </tr>
            </thead>
            <tbody>
                {games.map((game, i)=><GamesRow game={game} key={i}/>)}
            </tbody>
        </table>
        </>
    )
}

export default GamesTable;