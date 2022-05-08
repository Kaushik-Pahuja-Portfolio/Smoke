import React from 'react';
import { MdDeleteForever, MdEdit} from 'react-icons/md'

function StudioRow({ studio, onView, onDelete }) {
    return (
        <tr>
            <td>{studio.name}</td>
            <td>{studio.website}</td>
            <td>{studio.phone}</td>
            <td>
            <td><MdEdit onClick={() => onView(studio)}/></td>
            <td><MdDeleteForever onClick={() => alert(JSON.stringify(studio))}/></td>
            </td>
        </tr>
    );
}

export default StudioRow;