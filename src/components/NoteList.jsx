import React from 'react'
import Notes from './Notes';

function NoteList(props) {
    return (
        <div className='note-list-container'>
            {props.notes.map((note, index) => {
                return (
                    <Notes key={index} id={index + 1} title={note.title} content={note.content} onDelete={props.onDelete} />
                );
            })}
        </div>
    )
}

export default NoteList
