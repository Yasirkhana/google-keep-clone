import React from 'react'
import './App.css'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note = (props) => {

    const deleteItem=()=>{
        props.onDelete(props.id);
    } 

    return (
    <>  
        <div className='Note'>    
        <h1>{props.title} </h1> <br/>
        <p> {props.content}</p>
        <button  onClick = {deleteItem}>
            < DeleteOutlineIcon/> 
        </button>
        </div>
     </>

    );
}

export default Note;
