import React from 'react'
import {Link} from 'react-router-dom'

export default function FolderList(props) {
   
    return (
        <div>
            {props.folders.map(folder=><li>
                <Link to ={"/folder/"+folder.id}>{folder.name}</Link>
            </li>)}
        </div>
    )
}
