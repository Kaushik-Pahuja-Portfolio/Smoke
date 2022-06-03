import React from "react";
import { useState } from "react";

function LicenseAdd({player_id, options, onSubmit}){

    if(onSubmit === undefined){
        onSubmit = console.log;
    }

    const [game, setGame] = useState();
    const [date, setDate] = useState();
    const [price, setPrice] = useState();
    
    const SubmitLicense = () => {
        let license = {player_id};
        if(game !== undefined) license.game_id = game;
        if(date !== undefined) license.purchase_date = date;
        if(price !== undefined) license.price = price;
        license.valid = 1;
        onSubmit(license);
    }

    const GetUnownedGames = async()=>{

    }

    return(
        <tr>
            <td>
                <select value={game} onChange={e => setGame(e.target.value)}>
                    <option value={0}/>
                    {options.map((o, i) => <option value={o.game_id} key={i}>{o.title}</option>)}
                </select>
            </td>
            <td><input type="date" onChange={(e)=>setDate(e.target.value)}/></td>
            <td><input type="number" onChange={e=>setPrice(e.target.value)}/></td>
            <td onClick={(e) => SubmitLicense()}>submit</td>
        </tr>
    )
}

export default LicenseAdd;