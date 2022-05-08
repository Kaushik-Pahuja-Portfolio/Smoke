import React from "react";

function LicenseRow({license}){
    return(
        <>
        <tr>
            <td>{license.game}</td>
            <td>{license.purchase_date}</td>
            <td>{license.purchase_price}</td>
            <td>{license.valid}</td>
        </tr>
        </>
    )
}

export default LicenseRow;