import React from "react";
import LicenseRow from "./LicenseRow";

function LicenseTable({licenses}){
    return(
        <>
        <table>
            <thead>
                <th>Title</th>
                <th>Purchased</th>
                <th>Price</th>
                <th>Valid</th>
            </thead>
            <tbody>
                {licenses.map((license, i) => <LicenseRow license={license} key={i}/>)}
            </tbody>
        </table>
        </>
    )
}

export default LicenseTable;