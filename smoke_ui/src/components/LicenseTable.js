import React from "react";
import LicenseRow from "./LicenseRow";
import LicenseAdd from "./LicenseAdd";

function LicenseTable({licenses, player, onDeleteLicense}){
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
                {licenses.map((license, i) => <LicenseRow license={license} onDelete={onDeleteLicense} key={i}/>)}
                <LicenseAdd onSubmit={console.log("hello")}/>
            </tbody>
        </table>
        </>
    )
}

export default LicenseTable;