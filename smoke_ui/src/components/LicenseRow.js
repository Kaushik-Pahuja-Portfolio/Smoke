import React from "react";
import { MdDeleteForever} from 'react-icons/md'

function LicenseRow({license, onDelete}){
    return(
        <>
        <tr>
            <td>{license.title}</td>
            <td>{license.purchase_date}</td>
            <td>{license.price}</td>
            <td>{license.valid}</td>
            <td><MdDeleteForever onClick={() => onDelete(license.game_id)}/></td>
        </tr>
        </>
    )
}

export default LicenseRow;