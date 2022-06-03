import React from "react";
import { MdDeleteForever} from 'react-icons/md'
import { Link } from "react-router-dom";

function LicenseRow({license, Delete}){
    return(
        <>
        <tr>
            <td><Link to={`/GameInfo/${license.game_id}`}>{license.title}</Link></td>
            <td>{license.purchase_date}</td>
            <td>{license.price}</td>
            <td>{license.valid}</td>
            <td><MdDeleteForever onClick={() => Delete(license.game_id)}/></td>
        </tr>
        </>
    )
}

export default LicenseRow;