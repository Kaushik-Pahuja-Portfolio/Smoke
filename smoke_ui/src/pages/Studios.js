import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import StudioTable from '../components/StudioTable';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/Searchbar';
import PORT from '../port';

function Studios(){
    
    const [studios, setStudios] = useState([]);
    const navigate = useNavigate();

    const studioSearchParams = [
        {
            name: "Name",
            type: "text",
            key_name: "name"
        },
        {
            name: "Website",
            type: "text",
            key_name: "website"
        },
        {
            name: "Phone",
            type: "number",
            key_name: "phone"
        },
    ]


    const Search = async (params) => {
        const request = await(fetch(`http://flip2.engr.oregonstate.edu:${PORT}/Studios/${encodeURIComponent(JSON.stringify(params))}`));
        const data = await(request.json());
        console.log(data);
        setStudios(data);
    }

    const Insert = async (params) => {
        const request = await(fetch(`http://flip2.engr.oregonstate.edu:${PORT}/Studios-Insert/${encodeURIComponent(JSON.stringify(params))}`));
        console.log(await(request));
        loadStudios();
    }

    const loadStudios = async () => {
        const response = await(fetch(`http://flip2.engr.oregonstate.edu:${PORT}/Studios/{}`));
        const data = await(response.json())
        console.log(data);
        setStudios(data);
    }

    const onView = (studio) => {
        navigate(`/StudioInfo/${studio}`);
    };

    useEffect(()=>{
        loadStudios();
    }, []);

    return(
        <>
        <h2>List of Studios</h2>
        <SearchBar title="Search Studios" params={studioSearchParams} OnSubmit={Search}></SearchBar>
        <StudioTable studios={studios} onView={onView} onAdd={Insert}></StudioTable>
        </>
    )
}

export default Studios;