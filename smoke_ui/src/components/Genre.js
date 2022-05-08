import React from "react";

function Genre({genre, onDelete}){
    return(
        <tr>
            <td>{genre}</td>
            <td onClick={onDelete}>delete</td>
        </tr>
    )
}

export default Genre;