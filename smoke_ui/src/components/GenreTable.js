import React from "react";
import Genre from "./Genre";
import GenreAdd from "./GenreAdd";
import testgenres from "../test-data/genres";

function GenreTable({game}){
    const DeleteGenre = (genre) => {

    }

    const onAdd = (genre) => {

    }

    return(
        <table>
            <thead>
                <th>Genres</th>
                <th>action</th>
            </thead>
            <tbody>
                {testgenres.map((genre, i) => <Genre genre={genre} key={i} onDelete={DeleteGenre}/>)}
                <GenreAdd onSubmit={onAdd}/>
            </tbody>
        </table>
    )
}

export default GenreTable;