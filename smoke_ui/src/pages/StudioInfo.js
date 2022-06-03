import React, { useState } from 'react';
import { useNavigate, useParams} from "react-router-dom";
import { Link, Navigate } from 'react-router-dom';
import {useEffect } from 'react';

function StudioInfo({StudioToView, pool}){
    const [studioInfo, setStudioInfo] = useState([]);
    let params = useParams();
    if(params.id !== undefined) StudioToView = params.id;
    console.log(StudioToView);

    const GetStudioInfo = async () => {
        //const studio_id = StudioToView.studio_id;
        const request = await(fetch(`http://flip2.engr.oregonstate.edu:19866/Studios/{"studio_id":${StudioToView}}`));
        const data = await(request.json());
        console.log(data);
        setStudioInfo(data[0]);
    }

    const [name, setName] = useState(studioInfo.name);
    const [website, setWebsite] = useState(studioInfo.website);
    const [phone, setPhone] = useState(studioInfo.phone);

    const navigate = useNavigate();

    const editStudio = async () => {
        const studio_id = StudioToView.studio_id;
        const editedStudio = JSON.stringify({studio_id, name, website, phone})
        const request = await(fetch(`http://flip2.engr.oregonstate.edu:19866/Studios-Update/${editedStudio}`));
        console.log(request)
        navigate('/Studios')
    };

    useEffect(()=>{
        GetStudioInfo();
    }, [])

    return(
        <>
          <div>
              <h1>{studioInfo.name}</h1>
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