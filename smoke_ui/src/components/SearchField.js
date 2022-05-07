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

    return(
        <>
        <label for={field.name}>{field.name}</label>
        <input type="text" id={field.name} onChange={e=>{setValue(e.target.value);}}/>
        </>
    )
}

export default SearchField;