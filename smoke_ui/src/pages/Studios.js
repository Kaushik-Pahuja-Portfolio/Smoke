import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import StudioTable from '../components/StudioTable';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/Searchbar';
import InsertBar from '../components/InsertBar';
import teststudios from '../test-data/studios'

function Studios({setStudioToView}){
    
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

    const Search = (params) => {
        alert(JSON.stringify(params));
    }

    const Insert = (params) => {
        alert(JSON.stringify(params));
        loadStudios()
    }

    const onView = (studio) => {
        setStudioToView(studio);
        navigate('/StudioInfo');
    };

    const loadStudios = async () => {
        //const response = await fetch('/studios')
        //const data = await response.json();
        setStudios(teststudios);
    }

    useEffect(()=>{
        loadStudios();
    }, []);

    return(
        <>
        <h2>List of Studios</h2>
        <SearchBar title="Search Studios" params={studioSearchParams} OnSubmit={Search}></SearchBar>
        <StudioTable studios={studios} onView={onView}></StudioTable>
        <InsertBar title="Insert Studio" params={studioSearchParams} OnSubmit={Insert}></InsertBar>
        </>
    )
}

export default Studios;