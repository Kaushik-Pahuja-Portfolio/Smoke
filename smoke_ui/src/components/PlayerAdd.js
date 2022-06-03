import { useState } from "react";

function PlayerAdd({Submit}){
    const [username, setUsername] = useState([]);
    const [DOB, setDOB] = useState([]);
    const [email, setEmail] = useState([]);
    const [phone, setPhone] = useState([]);

    const SubmitParams = ()=>{
        let params = {};
        if(username !== undefined) params.username = username;
        if(DOB !== undefined) params.birthdate = DOB;
        if(email !== undefined) params.email = email;
        if(phone !== undefined) params.phone = phone;
        Submit(params);
    }

    return(
        <tr>
            <td>
                <input type="text" onChange={e=>{setUsername(e.target.value === "" ? undefined : e.target.value)}}/>
            </td>
            <td>
                <input type="text" onChange={e=>{setEmail(e.target.value === "" ? undefined : e.target.value)}}/>
            </td>
            <td>
                <input type="number" onChange={e=>{setPhone(e.target.value)}}/>
            </td>
            <td>
                <input type="date" onChange={e=>setDOB(e.target.value)}/>
            </td>
            <td onClick={SubmitParams}>Submit</td>
        </tr>
    )
}

export default PlayerAdd