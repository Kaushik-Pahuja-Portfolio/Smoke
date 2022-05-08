import React from "react";
import LicenseRow from "./LicenseRow";
import LicenseAdd from "./LicenseAdd";

function LicenseTable({licenses}){

    const AddLicense = (info) => {

    }

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
                <LicenseAdd onSubmit={console.log}/>
            </tbody>
        </table>
        </>
    )
}

export default LicenseTable;