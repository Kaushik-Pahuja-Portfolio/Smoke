import React, { useEffect } from "react";
import { useState } from "react";
import { MdPermDeviceInformation } from "react-icons/md";

function GenreAdd({options, onSubmit}){
    const [genre, setGenre] = useState();
    console.log(`options: ${options}`);

    return(
        <tr>
            <td>
                <select value={genre} onChange={(e)=>setGenre(e.target.value)}>
                    <option value=""/>
                    {options.map((g, i) => <option value={g.genre} key={i}>{g.genre}</option>)}
                </select>
            </td>
            <td onClick={()=>onSubmit(genre)}>Submit</td>
        </tr>
    )
}

export default GenreAdd;