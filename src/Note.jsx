import React from 'react'
import './App.css'
import BackspaceTwoToneIcon from '@material-ui/icons/BackspaceTwoTone';

const Note = (props) => {

    const deleteItem=()=>{
        props.onDelete(props.id);
    } 

    return (
    <>  
        <h1>{props.title} </h1> <br/>
        <p> {props.content}</p>
        <button  onClick = {deleteItem}>
            <BackspaceTwoToneIcon/> 
        </button>
     </>

    );
}

export default Note;
