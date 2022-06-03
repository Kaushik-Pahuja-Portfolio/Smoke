import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import StudioTable from '../components/StudioTable';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/Searchbar';
import InsertBar from '../components/InsertBar';
import teststudios from '../test-data/studios'

function Studios({setStudioToView, pool}){
    
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
        const request = await(fetch(`http://flip2.engr.oregonstate.edu:19866/Studios/${encodeURIComponent(JSON.stringify(params))}`));
        const data = await(request.json());
        console.log(data);
        setStudios(data);
    }

    const Insert = async (params) => {
        const request = await(fetch(`http://flip2.engr.oregonstate.edu:19866/Studios-Insert/${encodeURIComponent(JSON.stringify(params))}`));
        
        loadStudios();
    }

    const onView = (studio) => {
        setStudioToView(studio);
        navigate('/StudioInfo');
    };

    const onDelete = async (studio_id) => {
        const request = await(fetch(`http://flip2.engr.oregonstate.edu:19866/Studios-Delete/${studio_id}`));
        loadStudios();
    };

    const loadStudios = async () => {
        //const response = await fetch('/studios')
        //const data = await response.json();
        const response = await(fetch('http://flip2.engr.oregonstate.edu:19866/Studios/{}'));
        const data = await(response.json())
        console.log(data);
        setStudios(data);
    }

    useEffect(()=>{
        loadStudios();
    }, []);

    return(
        <>
        <h2>List of Studios</h2>
        <SearchBar title="Search Studios" params={studioSearchParams} OnSubmit={Search}></SearchBar>
        <StudioTable studios={studios} onView={onView} onDelete={onDelete}></StudioTable>
        <InsertBar title="Insert Studio" params={studioSearchParams} OnSubmit={Insert}></InsertBar>
        </>
    )
}

export default Studios;