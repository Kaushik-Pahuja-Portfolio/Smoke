import React from "react";
import { MdDeleteForever} from 'react-icons/md'

function LicenseRow({license, Delete}){
    return(
        <>
        <tr>
            <td>{license.title}</td>
            <td>{license.purchase_date}</td>
            <td>{license.price}</td>
            <td>{license.valid}</td>
            <td><MdDeleteForever onClick={() => Delete(license.game_id)}/></td>
        </tr>
        </>
    )
}

export default LicenseRow;