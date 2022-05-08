import React from "react";
import SearchField from "./SearchField";

function InsertBar ({title, params, OnSubmit}){
    let fullquery = {};
    const setFullQueryVal = (key, val) => {
        fullquery[key] = val;
        console.log(fullquery);
    }
    return(
        <>
        <label>{title}</label>
        {params.map((param, i) => <SearchField field={param} onSet={setFullQueryVal} key={i}/>)}
        <button onClick={() => {OnSubmit(fullquery); return false;}}>Search</button>
        </>
    )
}

export default InsertBar;