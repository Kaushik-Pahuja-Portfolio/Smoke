import React from 'react';
import { MdEdit} from 'react-icons/md'

function StudioRow({ studio, onView }) {
    return (
        <tr>
            <td>{studio.name}</td>
            <td>{studio.website}</td>
            <td>{studio.phone}</td>
            <td>
            <td><MdEdit onClick={() => onView(studio)}/></td>
            </td>
        </tr>
    );
}

export default StudioRow;