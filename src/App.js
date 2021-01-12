
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './Header';
import CreateNote from './CreateNote'
import Footer from './Footer';
import Note from './Note'


function App() {

  const addNote = (Note) =>{ 
    // alert ('I M CLICKED')

  }
  return (
    <> 
        <Header/>
        <CreateNote passnote= {addNote}/>
        <hr/>
        <Note/>
        <hr/>
        <Footer />
    </>

    );
}

export default App;
