import { useState } from 'react';
import Navbar from './components/Navbar';
import CreateArea from './components/CreateArea';
import NoteList from './components/NoteList';
import Footer from './components/Footer';


function App() {
  const [notes, setNotes] = useState([]);

  function addNote(value) {
    setNotes(prevNotes => {
      return (
        [value, ...prevNotes]
      );
    });
  }


  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return (index + 1 !== id)
      })
    });

  }


  return (
    <div>
      <Navbar />
      <CreateArea onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
      <Footer />
    </div>
  );
}

export default App
