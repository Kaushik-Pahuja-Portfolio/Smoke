import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import LicenseTable from '../components/LicenseTable';

function PlayerInfo({PlayerToView, pool}){
    
    console.log(PlayerToView);

    const [username, setUsername] = useState(PlayerToView.username);
    const [email, setEmail] = useState(PlayerToView.email);
    const [phone, setPhone] = useState(PlayerToView.phone);
    const [birthdate, setBirthdate] = useState(PlayerToView.birthdate);

    const navigate = useNavigate();

    const editPlayer = async () => {
        const player_id = PlayerToView.studio_id;
        const editedPlayer = JSON.stringify({player_id, username, email, phone, birthdate})
        const request = await(fetch(`http://flip2.engr.oregonstate.edu:19866/Players-Update/${JSON.stringify(editedPlayer)}`));
        navigate('/Players')
    };

    const SelectLicenses = () =>{
        console.log(`select * from licenses where player_id = ${PlayerToView.player_id}`);
    }

    const onDeleteLicense = async (license) => {
        const request = await(fetch(`http://flip2.engr.oregonstate.edu:19866/Licenses-Delete/${JSON.stringify(license)}`));
        loadStudios();
    };

    SelectLicenses();

    const PlayerLicenses  = [
        {
            game: "Return of the Obra Dinn",
            purchase_date: "01/22/2020",
            purchase_price: "$30.00",
            valid: "true"
        }
    ]
    return(
        <>
        <div>
            <h1>Edit player</h1>
            <input
                type="text"
                placeholder="Enter username here"
                value={username}
                onChange={e => setUsername(e.target.value)} />
            <input
                type="text"
                value={email}
                placeholder="Enter email here"
                onChange={e => setEmail(e.target.value)} />
            <input
                type="number"
                placeholder="Enter phone number here"
                value={phone}
                onChange={e => setPhone(e.target.value)} />
            <input
                type="text"
                placeholder="Enter DOB here"
                value={birthdate}
                onChange={e => setBirthdate(e.target.value)} />
            <button
                onClick={editPlayer}
            >Save</button>
        </div>
        <div>
            <h3>Licenses Owned</h3>
            <LicenseTable licenses={PlayerLicenses} onDeleteLicense={onDeleteLicense}/>
        </div>
        </>
    );
}

export default PlayerInfo;