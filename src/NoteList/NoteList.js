import React from 'react'
import {Link} from 'react-router-dom'


export default function NoteList(props) {
    let notes=props.notes
    if (props.match.params.folderId){
        notes=props.notes.filter(note=>note.folderId==props.match.params.folderId)
    }
    return (
        <div>
            {notes.map(note=><li>
                <Link to ={"/note"+note.id}>{note.name}</Link>
            </li>)}
        </div>
    )
}
