import React,{useState} from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {
    const[Note,setNote] = useState({
        title : '',
        content : '',
    });

const inputEvent = (event) =>{

    // const Value = event.target.value;
    // const Name = event.target.name;

    const {name ,value} = event.target;


    setNote((preData)=>{

         return {
             ...preData , 
                [ name ] : value 
         }
    })
}
 const addEvent = () =>{
        props.passnote(Note);
 }


  return (
    <> 
            <div className='CreateNote'>
                <input 
                    type = 'text' 
                    placeholder = 'Title'
                    name = 'title'
                    autoComplete= 'off'
                    value = {Note.title}
                    onChange = {inputEvent}
                    ></input>
                    <textarea 
                    row = '' 
                    column= '' 
                    placeholder='Write a Note...' 
                    name = 'content'
                    autoComplete= 'off'
                    value = {Note.content}
                    onChange = {inputEvent}
                ></textarea>    
                <button onClick = {addEvent}>
                        <AddIcon/>
                </button>
            </div>                 

    </>

    );
}

export default CreateNote;
