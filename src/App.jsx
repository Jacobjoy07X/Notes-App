import { useState } from 'react'
import './App.css'

function App() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const[color, setColor] = useState("yellow");

//ADD NOTES
  function addNote() {
    
    if (note.trim() === ""){ 
      return};
    const newNote={
      title: title,
      content: note,
      color: color
    };

    if(title.length > 100 || note.length > 200){
      return;
    }
    
    setNotes([...notes, newNote]);
    setTitle("");
    setNote("");
  }

  //DELETE NOTES
  function deletenote(index) {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  }

//UPDATE /EDIT NOTES
  function updateNote() {
    if (editIndex === null || note.trim() === "") {
      return;
    }

  const updatedNotes = [...notes];
  updatedNotes[editIndex] = {
    title: title,
    content: note,
    color: color
  };
  setNotes(updatedNotes);
  setTitle("");
  setNote("");
  setColor("yellow");
  setEditIndex(null);
}


  return (
    <>
    <h1 id = "header"> 💡 Notes app</h1>
    <input 
    type="text" placeholder="write title"
    value={title}
    maxLength={100}
    onChange={(e) => setTitle(e.target.value)}
    />

    
    <input type="text" placeholder="write notes" 
    value={note}
    maxLength={200}
    onChange={(e) => setNote(e.target.value)}/>

    <button onClick={addNote} >  ➕Add note </button>
    <button onClick={updateNote}> 📖 Update Note</button>
    <select value={color} onChange={(e) => setColor(e.target.value)}>
      <option value="yellow">Yellow</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
      <option value="red">Red</option>
    </select>
    
    {notes.map((item, index)=>(
      <div key={index}
      className={`notecard ${item.color}`}>
        <h2>{item.title}</h2>
        <p>{item.content}</p>
        

  <button
  onClick={()=>{
    setEditIndex(index);
    setTitle(item.title);
    setNote(item.content);
    setColor(item.color);}}
    > ✏️ Edit</button>
  <button onClick={()=>deletenote(index)}> 🗑️ Delete</button>

</div>
))}
</>
  )
}

export default App
