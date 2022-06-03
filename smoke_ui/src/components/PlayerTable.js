import React from "react"
import PlayerRow from './PlayerRow';

function PlayerTable({players, onView, onDelete}){
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
                    onDelete={onDelete}
                    key={i} />)}
            </tbody>
        </table>
        </>
    )
}

export default PlayerTable;