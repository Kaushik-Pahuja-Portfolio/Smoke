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

    const Search = (params) => {
        alert(JSON.stringify(params));
        let sql = "select * from Studios "
        if(Object.keys(params).length !== 0){
            console.log(Object.keys(params).length)
            sql += "where "
            Object.keys(params).forEach((param, index) => {
                if(index !== 0) sql += "and ";
                sql += `${param} = ${params[param]} `;
            });
        }
        sql.concat(";");
        console.log(sql);
    }

    const Insert = (params) => {
        alert(JSON.stringify(params));
        alert(JSON.stringify(params));
        let sql = "INSERT INTO Studios "
        if(Object.keys(params).length != 0){
            sql += '('
            Object.keys(params).forEach((param, index) => {
                if(index !== 0) sql += " ";
                sql += `${param}, `;
            });
            sql = sql.slice(0, -2);
            sql += ') VALUES '
            Object.keys(params).forEach((param, index) => {
                if(index !== 0) sql += " ";
                sql += `${params[param]}, `;
            });
            sql = sql.slice(0, -2);
        }
        sql.concat(";");
        console.log(sql);
        loadStudios()
    }

    const onView = (studio) => {
        setStudioToView(studio);
        navigate('/StudioInfo');
    };

    const onDelete = async (studio) => {
        alert(JSON.stringify(studio))
        loadStudios();
    };

    const loadStudios = async () => {
        //const response = await fetch('/studios')
        //const data = await response.json();
        const response = await fetch('http://flip2.engr.oregonstate.edu:19866/:query');
        setStudios(JSON.parse(response));
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