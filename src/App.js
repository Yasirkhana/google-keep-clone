import React,{useState} from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './Header';
import CreateNote from './CreateNote'
import Footer from './Footer';
import Note from './Note'

const App = () => {

  const [addItem,setaddItem] = useState([])



  const addNote = (Note) =>{ 
    // alert ('I M CLICKED')
    setaddItem((preData) => {
      return [...preData ,Note ];
    } 
    )

  }
  const deleteItem = (id) =>{ 
 
    setaddItem((oldData) => {
      oldData.filter((currData,indx)=>{
        return indx !== id;
        
      })
    } 
    )
    alert ('NOTE DELETED!')
  }
  return (
    <> 
        <Header/>
        <CreateNote passnote= {addNote}/>

           { addItem.map((val, index) => {
          return  (
          <Note 
                      key={index}
                      id={index}
                      title={val.title}
                      content={val.content}
                      onDelete= {deleteItem}
          />);
        })}
       <hr/>
        <Footer />
    </>

    );
}

export default App;
