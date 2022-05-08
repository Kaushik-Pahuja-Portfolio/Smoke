import React from "react";
import { useState } from "react";

function LicenseAdd({onSubmit}){

    if(onSubmit === undefined){
        onSubmit = console.log;
    }

    let license = {game: undefined, purchase_date: undefined, purchase_price: undefined, valid: true};
    const [game, setGame] = useState(license.game);
    const [date, setDate] = useState(license.purchase_date);
    const [price, setPrice] = useState(license.purchase_price);
    
    const SubmitLicense = () => {
        license.game = game;
        license.purchase_date = date;
        license.purchase_price = price;
        onSubmit(license);
    }

    return(
        <tr>
            <td><input type="text"/></td>
            <td><input type="date"/></td>
            <td><input type="number"/></td>
            <td onClick={(e) => SubmitLicense()}>submit</td>
        </tr>
    )
}

export default LicenseAdd;