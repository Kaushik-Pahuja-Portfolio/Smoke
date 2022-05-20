import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link, Navigate } from 'react-router-dom';
import {useEffect } from 'react';

function StudioInfo({StudioToView, pool}){
    const [name, setName] = useState(StudioToView.name);
    const [website, setWebsite] = useState(StudioToView.website);
    const [phone, setPhone] = useState(StudioToView.phone);

    const navigate = useNavigate();

    const editStudio = async () => {
        const editedStudio = {name, website, phone}
        alert(JSON.stringify(editedStudio))
        navigate('/')
    };



    return(
        <>
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
          </>
    );
}

export default StudioInfo;