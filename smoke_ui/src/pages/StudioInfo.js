import React, { useState } from 'react';
import { useNavigate, useParams} from "react-router-dom";
import { Link, Navigate } from 'react-router-dom';
import {useEffect } from 'react';

function StudioInfo({StudioToView, pool}){
    const [studioInfo, setStudioInfo] = useState([]);
    let {params} = useParams();

    const GetStudioInfo = async () => {
        const request = await(fetch(`http://flip2.engr.oregonstate.edu:19866/select * from Studios where studio_id=${StudioToView};`));
        const data = await(request.json());
        console.log(data);
        setStudioInfo(data[0]);
    }

    const [name, setName] = useState(studioInfo.name);
    const [website, setWebsite] = useState(studioInfo.website);
    const [phone, setPhone] = useState(studioInfo.phone);

    const navigate = useNavigate();

    const editStudio = async () => {
        const editedStudio = {name, website, phone}
        alert(JSON.stringify(editedStudio))
        navigate('/')
    };

    useEffect(()=>{
        console.log(StudioToView);
        if(StudioToView === undefined){
            console.log(`params: ${params}`);
        }
        GetStudioInfo();
    }, [])

    return(
        <>
          <div>
              <h1>Edit studio</h1>
              <input
                  type="text"
                  placeholder={studioInfo.name}
                  value={name}
                  onChange={e => setName(e.target.value)} />
              <input
                  type="text"
                  value={website}
                  placeholder={studioInfo.website}
                  onChange={e => setWebsite(e.target.value)} />
              <input
                  type="number"
                  placeholder={studioInfo.phone}
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