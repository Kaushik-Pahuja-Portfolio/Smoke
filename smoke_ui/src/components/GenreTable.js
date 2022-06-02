import React, { useState , useEffect } from "react";
import Genre from "./Genre";
import GenreAdd from "./GenreAdd";
import testgenres from "../test-data/genres";

function GenreTable({game}){
    const DeleteGenre = (genre) => {
        alert(JSON.stringify(genre));
    }

    const onAdd = async (genre) => {
        let params = {};
        params.game_id = game;
        params.genre = genre;
        console.log(JSON.stringify(params));
        const request = await(fetch(`http://flip2.engr.oregonstate.edu:19866/GamesGenres-Add/${JSON.stringify(params)};`));
        const res = await(request.json());
    }

    const [genres, SetGenres] = useState([]);

    const LoadGenres = async()=>{
        const request = await(fetch(`http://flip2.engr.oregonstate.edu:19866/rawquery/select distinct genre from Games join GamesGenres using (game_id) where game_id = ${game}`));
        const data = await(request.json());
        SetGenres(data);
        console.log(data);
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
                {genres.map((genre, i) => <Genre genre={genre.genre} key={i} onDelete={DeleteGenre}/>)}
                <GenreAdd onSubmit={onAdd} game={game}/>
            </tbody>
        </table>
    )
}

export default GenreTable;