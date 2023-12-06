import './App.css';
import Note from './Components/Note/Note';
import Notes from './Components/Notes/Notes';

function App() {

  return (
    <div className='app'>
      <div className='notes'>
        <Notes></Notes>
      </div>
      <div className='note'>
        <Note></Note>
      </div>
    </div>
  );
}

export default App;
