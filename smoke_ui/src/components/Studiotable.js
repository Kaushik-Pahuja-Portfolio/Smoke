import React from "react"
import StudioRow from './StudioRow';
import StudioAdd from "./StudioAdd";

function StudioTable({studios, onView, onAdd}){
    return(
        <>
        <table id="studios">
            <thead>
                <th>Name</th>
                <th>Website</th>
                <th>Phone</th>
            </thead>
            <tbody>
            {studios.map((studio, i) => <StudioRow studio={studio}
                    onView={onView}
                    key={i} />)}
            <StudioAdd Submit={onAdd}/>
            </tbody>
        </table>
        </>
    )
}

export default StudioTable;