import React from "react";
import {MdEdit} from 'react-icons/md'
import {Link, useNavigate} from 'react-router-dom'

function GamesRow({game, onView, setStudio}){
    //console.log(game);
    const navigate = useNavigate()
    return(
    <>
    <tr>
        <td><Link to={`/GameInfo/${game.game_id}`}>{game.title}</Link></td>
        <td><Link to={`/StudioInfo/${game.studio_id}`}>{game.name}</Link></td>
        <td>{game.release_date}</td>
        <td><a href={game.store_page}>Store Page</a></td>
        <td><MdEdit onClick={() => navigate(`/GameInfo/${game.game_id}`)}/></td>
    </tr>
    </>
    )
}

export default GamesRow;