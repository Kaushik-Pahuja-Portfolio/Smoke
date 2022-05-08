import React from "react";
import {MdDeleteForever} from 'react-icons/md';

function Genre({genre, onDelete}){
    return(
        <tr>
            <td>{genre}</td>
            <td><MdDeleteForever onClick={() => alert(JSON.stringify(genre))}/></td>
        </tr>
    )
}

export default Genre;