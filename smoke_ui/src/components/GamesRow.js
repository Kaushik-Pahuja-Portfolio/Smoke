import React from "react";
import {MdEdit} from 'react-icons/md'
import {Link} from 'react-router-dom'

function GamesRow({game, onView, setStudio}){
    console.log(game);

    return(
    <>
    <tr>
        <td><Link to="/GameInfo" onClick={()=>onView(game.game_id)}>{game.title}</Link></td>
        <td><Link to="/StudioInfo" onClick={() => setStudio(game.studio_id)}>{game.name}</Link></td>
        <td>{game.release_date}</td>
        <td><a href={game.store_page}>Store Page</a></td>
        <td><MdEdit onClick={() => onView(game)}/></td>
    </tr>
    </>
    )
}

export default GamesRow;