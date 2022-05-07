import React from "react"
import StudioRow from './StudioRow';

function StudioTable({studios, onView}){
    return(
        <>
        <table id="studios">
            <thead>
                <th>Name</th>
                <th>Website</th>
                <th>phone</th>
            </thead>
            <tbody>
            {studios.map((studio, i) => <StudioRow studio={studio}
                    onView={onView}
                    key={i} />)}
            </tbody>
        </table>
        </>
    )
}

export default StudioTable;