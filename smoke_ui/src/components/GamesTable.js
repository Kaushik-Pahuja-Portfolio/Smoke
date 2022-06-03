import React from "react";
import GamesRow from "./GamesRow"
import {useState, useEffect} from 'react'

function GamesTable({games, onAdd}){
    const [studios, setStudios] = useState();

    const GetStudios = async ()=>{
        const req = await fetch("http://flip2.engr.oregonstate.edu:19866/Studios/{}");
        const data = await req.json();
        setStudios(data);
        console.log(data);
    }

    useEffect(()=>{
        GetStudios();
    }, [])
    return(
        <>
        <table>
            <thead>
                    <th>Title</th>
                    <th>Studio</th>
                    <th>Year</th>
                    <th>Store Page</th>
                    <th></th>
            </thead>
            <tbody>
            {games.map((game, i) => <GamesRow game={game} key={i} />)}
            </tbody>
        </table>
        </>
    )
}

export default GamesTable;