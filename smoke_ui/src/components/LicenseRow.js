import React from "react";

function LicenseRow({info}){
    return(
        <>
        <tr>
            <td>{info.game}</td>
            <td>{info.purchase_date}</td>
            <td>{info.purchase_price}</td>
            <td>{info.valid}</td>
        </tr>
        </>
    )
}

export default LicenseRow;