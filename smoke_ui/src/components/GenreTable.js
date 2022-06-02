import React, { useState , useEffect } from "react";
import Genre from "./Genre";
import GenreAdd from "./GenreAdd";
import testgenres from "../test-data/genres";

function GenreTable({game}){
    const DeleteGenre = (genre) => {
        alert(JSON.stringify(genre));
    }

    const onAdd = (params) => {
        alert(JSON.stringify(params));
        let sql = "INSERT INTO Genres "
        if(Object.keys(params).length != 0){
            sql += '('
            Object.keys(params).forEach((param, index) => {
                if(index !== 0) sql += " ";
                sql += `${param}, `;
            });
            sql = sql.slice(0, -2);
            sql += ') VALUES '
            Object.keys(params).forEach((param, index) => {
                if(index !== 0) sql += " ";
                sql += `${params[param]}, `;
            });
            sql = sql.slice(0, -2);
        }
        sql.concat(";");
        console.log(sql);
    }

    const [genres, SetGenres] = useState([]);

    const LoadGenres = async()=>{
        const request = await(fetch(`http://flip2.engr.oregonstate.edu/rawquery/select distinct genre from Games join GamesGenres using (game_id) join Genres using (genre_id) where game_id = ${game.game_id}`));
        const data = await(request.json());
        SetGenres(data);
    }

    useEffect(()=>{
        LoadGenres();
    }, [])

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