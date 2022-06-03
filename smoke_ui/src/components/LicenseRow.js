import React from "react";
import { MdDeleteForever} from 'react-icons/md'

function LicenseRow({license, onDelete}){
    return(
        <>
        <tr>
            <td>{license.game}</td>
            <td>{license.purchase_date}</td>
            <td>{license.purchase_price}</td>
            <td>{license.valid}</td>
            <td><MdDeleteForever onClick={() => onDeleteLicense(license)}/></td>
        </tr>
        </>
    )
}

export default LicenseRow;