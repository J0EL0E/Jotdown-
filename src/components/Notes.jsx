import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import "../main.css"

function Notes(props) {
    return (
        <div className="note-container">
            <button className='delete-button' onClick={() => props.onDelete(props.id)
            }><DeleteIcon /></button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default Notes;
