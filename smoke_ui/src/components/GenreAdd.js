import React, { useEffect } from "react";
import { useState } from "react";
import { MdPermDeviceInformation } from "react-icons/md";

function GenreAdd({game, onSubmit}){
    const [genre, setGenre] = useState();
    const [options, setOptions] = useState([]);
    const loadOptions = async () =>{
        const request = await(fetch(`http://flip2.engr.oregonstate.edu:19866/rawquery/select distinct genre from Genres where genre not in (select distinct genre from GamesGenres join Games using(game_id) where game_id != ${game});`));
        const data = await(request.json());
        setOptions(data);
        console.log(data);
    }
    useEffect(()=>{
        loadOptions();
    }, [])
    return(
        <tr>
            <td>
                <select value={genre} onChange={(e)=>setGenre(e.target.value)}>
                    {options.map((g, i) => <option value={g.genre} key={i}>{g.genre}</option>)}
                </select>
            </td>
            <td><input type="text" onChange={(e)=>setGenre(e.target.value)}/></td>
            <td onClick={()=>onSubmit(genre)}>Submit</td>
        </tr>
    )
}

export default GenreAdd;