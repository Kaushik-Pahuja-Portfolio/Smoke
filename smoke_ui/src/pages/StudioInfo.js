import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function StudioInfo({studioToView}){
    const [name, setName] = useState(studioToView.name);
    const [website, setWebsite] = useState(studioToView.website);
    const [phone, setPhone] = useState(studioToView.phone);

    const history = useNavigate();

    const editStudio = async () => {
        const editedStudio = {name, website, phone}
        const response = await fetch(`/studios/${studioToView.studio_id}`, {
            method: 'PUT',
            body: JSON.stringify(editedStudio),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if(response.status === 200){
            alert('Successfully edited the studio');
        } else{
            alert(`Falied to edit studio, status code = ${response.status}`);
        }
        history.push('/')
    };


    return(
        <div>
            <h1>Edit studio</h1>
            <input
                type="text"
                placeholder="Enter name here"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="text"
                value={website}
                placeholder="Enter website here"
                onChange={e => setWebsite(e.target.value)} />
            <input
                type="number"
                placeholder="Enter phone number here"
                value={phone}
                onChange={e => setPhone(e.target.value)} />
            <button
                onClick={editStudio}
            >Save</button>
        </div>
    );
}

export default StudioInfo;