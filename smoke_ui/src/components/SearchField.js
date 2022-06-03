import React, { useEffect } from "react";
import { useState } from "react";

function SearchField({field, onSet}){
    const fieldName = field.name;
    const key = field.key_name;
    const [value, setValue] = useState();

    useEffect(()=>{
        //console.log(key, value);
        onSet(key, value);
    })
    console.log(field);
    if(field.type === "select"){
        return(
            <>
            <label for={field.name}>{field.name}</label>
            <select id={field.name} onChange={e=>{if(e.target.value !== "") setValue(e.target.value); else setValue(undefined)}}>
                <option value=""></option>
                {field.options.map((o, i) =><option value={o} key={i}>{o}</option>)}
            </select>
            </>
        )
    }

    return(
        <>
        <label for={field.name}>{field.name}</label>
        <input type="text" id={field.name} onChange={e=>{if(e.target.value !== "") setValue(e.target.value); else setValue(undefined)}}/>
        </>
    )
}

export default SearchField;