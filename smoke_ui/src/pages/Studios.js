import React from 'react';
import { Link } from 'react-router-dom';
import StudioTable from '../components/StudioTable';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Studios({setStudioToView}){
    
    const [studios, setStudios] = useState([]);
    const history = useNavigate();

    const onView = (studio) => {
        setStudioToView(studio);
        history.push('/StudioInfo');
    };

    const loadStudios = async () => {
        const response = await fetch('/studios')
        const data = await response.json();
        setStudios(data);
    }

    useEffect(()=>{
        loadStudios();
    }, []);

    return(
        <>
        <h2>List of Studios</h2>
        <StudioTable studios={studios} onView={onView}></StudioTable>
        </>
    )
}

export default Studios;