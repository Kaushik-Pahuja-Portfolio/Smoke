import React, {useEffect, useState} from "react";
import LicenseRow from "./LicenseRow";
import LicenseAdd from "./LicenseAdd";

function LicenseTable({player_id}){
    
    const [licenses, setLicenses] = useState([]);
    const [options, setOptions] = useState([]);

    const GetLicenses = async () => {
        const req = await fetch(`http://flip2.engr.oregonstate.edu:19866/Licenses/{"player_id": ${player_id}}`);
        const data = await req.json();
        console.log(data);
        setLicenses(data);
    }

    const CreateLicense = async(params) =>{
        const req = await fetch(`http://flip2.engr.oregonstate.edu:19866/Licenses-Insert/${JSON.stringify(params)}`);
        const data = await req.json();
        console.log(data);
        GetLicenses();
        GetOptions();
    }

    const DeleteLicense = async(game_id) => {
        let params = {};
        params.player_id = player_id;
        params.game_id = game_id;
        const req = await fetch(`http://flip2.engr.oregonstate.edu:19866/Licenses-Delete/${JSON.stringify(params)}`);
        const data  = await req.json();
        console.log(data);
        GetLicenses();
        GetOptions();
    }

    const GetOptions = async() =>{
        const req = await fetch(`http://flip2.engr.oregonstate.edu:19866/Licenses-Options/${player_id}`);
        const data = await req.json();
        console.log(data);
        setOptions(data);
    }
    
    useEffect(()=>{
        GetLicenses();
        GetOptions();
    }, [])

    return(
        <>
        <table>
            <thead>
                <th>Title</th>
                <th>Purchased</th>
                <th>Price</th>
                <th>Valid</th>
            </thead>
            <tbody>
                {licenses.map((license, i) => <LicenseRow license={license} Delete={DeleteLicense} key={i}/>)}
                <LicenseAdd player_id={player_id} options={options} onSubmit={CreateLicense}/>
            </tbody>
        </table>
        </>
    )
}

export default LicenseTable;