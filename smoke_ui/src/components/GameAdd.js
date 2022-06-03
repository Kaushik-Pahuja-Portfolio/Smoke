import React from "react";
import { useState, useEffect } from "react";

function GameAdd({studios, onAdd}){
    
    const [title, setTitle] = useState();
    const [studio, setStudio] = useState();
    const [releaseDate, setReleaseDate] = useState();
    const [storePage, setStorePage] = useState();
    console.log(studios);

    const AddGame = async()=>{
        let params = {};
        if(title !== undefined) params.title = title;
        if(studio !== undefined) params.studio_id = studio;
        if(releaseDate !== undefined) params.release_date = releaseDate;
        if(storePage !== undefined) params.store_page = storePage;
        console.log(params);
        onAdd(params);
    }

    return (
        <>
        <tr>
            <td><input type="text" onChange={(e)=>setTitle(e.target.value === "" ? undefined : e.target.value)}/></td>
            <td><select value={studio} onChange={e=>setStudio(e.target.value === "" ? undefined : e.target.value)}>
                <option value=""/>
                {studios.map((o, i) => <option value={o.studio_id} key={i}>{o.name}</option>)}
            </select></td>
            <td><input type="date" onChange={e=> setReleaseDate(e.target.value === "" ? undefined : e.target.value)}/></td>
            <td><input type="text" onChange={e=>setStorePage(e.target.value === "" ? undefined : e.target.value)}/></td>
            <td onClick={(e) => AddGame()}>submit</td>
        </tr>
        </>
    )
}

export default GameAdd;