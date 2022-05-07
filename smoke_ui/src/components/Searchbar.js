import React from "react";
import SearchField from "./SearchField";

function SearchBar ({title, params, OnSubmit}){
    let fullquery = {};
    const setFullQueryVal = (key, val) => {
        fullquery[key] = val;
        console.log(fullquery);
    }
    return(
        <form>
            <label>{title}</label>
            {params.map((param, i) => <SearchField field={param} onSet={setFullQueryVal} key={i}/>)}
            <button onClick={() => OnSubmit(fullquery)}>Search</button>
        </form>
    )
}

export default SearchBar;