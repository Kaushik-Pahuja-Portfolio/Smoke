import React from "react";
import { useState } from "react";

function GenreAdd({onSubmit}){
    const [genre, setGenre] = useState();
    return(
        <tr>
            <td><input type="text" onChange={(e)=>setGenre(e.target.value)}/></td>
            <td onClick={()=>onSubmit(genre)}>Submit</td>
        </tr>
    )
}

export default GenreAdd;