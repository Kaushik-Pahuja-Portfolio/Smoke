import { useState } from "react";

function StudioAdd({Submit}){
    const [name, setName] = useState([]);
    const [website, setWebsite] = useState([]);
    const [phone, setPhone] = useState([]);

    const SubmitParams = ()=>{
        let params = {};
        if(name !== undefined) params.name = name;
        if(website !== undefined) params.website = website;
        if(phone !== undefined) params.phone = phone;
        Submit(params);
    }

    return(
        <tr>
            <td>
                <input type="text" onChange={e=>{setName(e.target.value === "" ? undefined : e.target.value)}}/>
            </td>
            <td>
                <input type="text" onChange={e=>{setWebsite(e.target.value === "" ? undefined : e.target.value)}}/>
            </td>
            <td>
                <input type="number" onChange={e=>{setPhone(e.target.value)}}/>
            </td>
            <td onClick={SubmitParams}>Submit</td>
        </tr>
    )
}

export default StudioAdd;