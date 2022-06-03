import React from 'react';
import { MdDeleteForever, MdEdit} from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom';

function StudioRow({ studio }) {
    let navigate = useNavigate();
    return (
        <tr>
            <td>{studio.name}</td>
            <td><a href={studio.website}>{studio.website}</a></td>
            <td>{studio.phone}</td>
            <td>
            <td><MdEdit onClick={() => navigate(`/StudioInfo/${studio.studio_id}`)}/></td>
            </td>
        </tr>
    );
}

export default StudioRow;