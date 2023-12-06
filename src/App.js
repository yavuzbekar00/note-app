import { useState } from 'react';
import './App.css';
import Note from './Components/Note/Note';
import Notes from './Components/Notes/Notes';
import ShowNote from './Components/ShowNote/ShowNote';

function App() {
  const [selectedNote, setSelectedNote] = useState()
  const [isClick, setIsClick] = useState(false)
  const [notes, setNotes] = useState([])
  const [updatedNote, setUpdatedNote] = useState({
    id: "",
    title: "",
    content: ""
  })

  const handleDelete = () => {
    const afterDeleted = notes.filter((note) => note !== selectedNote);
    setNotes(afterDeleted);
    setIsClick(false)
  }

  const handleUpdate = () => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.title === selectedNote.title
          ? { ...note, title: updatedNote.title, content: updatedNote.content }
          : note
      )
    );
  }

  return (
    <div className='app'>
      <div className='notes'>
        <Notes setSelectedNote={setSelectedNote} setIsClick={setIsClick} notes={notes}></Notes>
      </div>
      <div className='note'>
        {
          isClick ? <ShowNote handleUpdate={handleUpdate} setUpdatedNote={setUpdatedNote} updatedNote={updatedNote} handleDelete={handleDelete} selectedNote={selectedNote} setIsClick={setIsClick}></ShowNote> : <Note notes={notes} setNotes={setNotes}></Note>
        }
      </div>
    </div>
  );
}

export default App;
