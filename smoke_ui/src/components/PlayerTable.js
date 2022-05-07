import React from "react"
import PlayerRow from './PlayerRow';

function PlayerTable({players, onView}){
    return(
        <>
        <table id="players">
            <thead>
                <th>Username</th>
                <th>e-mail</th>
                <th>phone</th>
                <th>DOB</th>
            </thead>
            <tbody>
            {players.map((player, i) => <PlayerRow player={player}
                    onView={onView}
                    key={i} />)}
            </tbody>
        </table>
        </>
    )
}

export default PlayerTable;