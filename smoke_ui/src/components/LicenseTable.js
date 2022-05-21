import React from "react";
import LicenseRow from "./LicenseRow";
import LicenseAdd from "./LicenseAdd";

function LicenseTable({licenses}){

    const AddLicense = (params) => {
        alert(JSON.stringify(params));
        let sql = "INSERT INTO Licenses "
        if(Object.keys(params).length != 0){
            sql += '('
            Object.keys(params).forEach((param, index) => {
                if(index !== 0) sql += " ";
                sql += `${param}, `;
            });
            sql = sql.slice(0, -2);
            sql += ') VALUES '
            Object.keys(params).forEach((param, index) => {
                if(index !== 0) sql += " ";
                sql += `${params[param]}, `;
            });
            sql = sql.slice(0, -2);
        }
        sql.concat(";");
        console.log(sql);
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
                <LicenseAdd onSubmit={AddLicense}/>
            </tbody>
        </table>
        </>
    )
}

export default LicenseTable;