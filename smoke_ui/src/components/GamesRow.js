import React from "react";
import {MdEdit} from 'react-icons/md'

function GamesRow({game, onView}){
    return(
    <>
    <tr>
        <td>{game.title}</td>
        <td>{game.release_date}</td>
        <td>{game.studio}</td>
        <td>{game.store_page}</td>
        <td><MdEdit onClick={() => onView(game)}/></td>
    </tr>
    </>
    )
}

export default GamesRow;