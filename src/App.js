import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from 'react'
import AddNotes from './Components/AddNotes'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import YourNotes from './Components/YourNotes'
import EditNotes from './Components/EditNotes'
import Footer from "./Components/Footer"
import About from './Components/About'
import Contact from './Components/Contact'

function App() {
  let initNotes;
  if (localStorage.getItem("notes") === null) {
    initNotes = [];
  }
  else {
    initNotes = JSON.parse(localStorage.getItem("notes"));
  }

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [notes, setNotes] = useState(initNotes)
  const [toEditNote, setToEditNote] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [newDesc, setNewDesc] = useState('')
  const [time, setTime] = useState('')

  const addNotes = () => {
    if (title.length > 0 && desc.length > 0) {
      let sno;
      if (notes.length === 0) {
        sno = 0;
      }
      else {
        sno = notes[notes.length - 1].sno;
      }
      const newNote = {
        sno: sno + 1,
        title: title,
        desc: desc,
        date: date.toLocaleDateString(),
        time: time
      }

      setNotes([...notes, newNote]);
      setTitle('');
      setDesc('');

      localStorage.setItem("notes", JSON.stringify(notes));

      alert("Note added.");
    }
    else {
      alert("Title or description can't be blank.");
    }
  }

  const clear = () => {
    setTitle('');
    setDesc('');

    setNewTitle('');
    setNewDesc('');
  }

  const deleteNotes = (note) => {
    setNotes(
      notes.filter((e) => {
        return e !== note;
      })
    )

    localStorage.setItem("notes", JSON.stringify(notes));
  }

  const editNotes = (note) => {
    setToEditNote(note);
    setNewTitle(note.title);
    setNewDesc(note.desc);
    setNotes(
      notes.filter((e) => {
        return e !== note;
      })
    )
  }

  const save = () => {
    if (newTitle.length > 0 && newDesc.length > 0) {
      let sno;
      if (notes.length === 0) {
        sno = 0;
      }
      else {
        sno = notes[notes.length - 1].sno;
      }
      const editedNote = {
        sno: sno + 1,
        title: newTitle,
        desc: newDesc,
        date: date.toLocaleDateString(),
        time: time
      }

      setNotes([...notes, editedNote]);

      setToEditNote('');
      setNewTitle('');
      setNewDesc('');

      localStorage.setItem("notes", JSON.stringify(notes));

      alert("Note saved. Please go to notes. This page will no longer function.");
    }
    else {
      alert("Title or description can't be blank.");
    }
  }

  const date = new Date();

  const Time = () => {
    setInterval(() => {
      setTime(date.toLocaleTimeString())
    }, 1000);
  }

  useEffect(() => {
    setTime(date.toLocaleTimeString());
    Time();
  })

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home time={time} date={date} />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="writeNotes" element={<AddNotes title={title} desc={desc} setTitle={setTitle} setDesc={setDesc} addNotes={addNotes} clear={clear} date={date} time={time} />} />
            <Route path="notes" element={<YourNotes notes={notes} deleteNotes={deleteNotes} editNotes={editNotes} date={date} time={time} />} />
            <Route path="editNotes" element={<EditNotes toEditNote={toEditNote} newTitle={newTitle} newDesc={newDesc} setNewTitle={setNewTitle} setNewDesc={setNewDesc} save={save} clear={clear} date={date} time={time} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
