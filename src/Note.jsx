import React from 'react'
import './App.css'
import BackspaceTwoToneIcon from '@material-ui/icons/BackspaceTwoTone';

const Note = () => {

    return (
    <>  
        <h1>Title</h1> <br/>
        <p> COntent HERE</p>
        <button>
        <BackspaceTwoToneIcon/>
        </button>
     </>

    );
}

export default Note;
