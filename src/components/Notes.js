import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext"
import AddNote from "./AddNote";
import Noteitem from "./Noteitem";

const Notes = () => {
    const context = useContext(noteContext)
    const {notes, getNotes} = context
    const [note, setNote] = useState({edit_title:"", edit_description:"", edit_tag:"default"})


    useEffect(() => {
        getNotes()
    })

    const updateNote = (currentNote) =>{
        ref.current.click()
        setNote({edit_title: currentNote.title, edit_description: currentNote.description, edit_tag: currentNote.tag})
    }

    const ref = useRef(null)

    const handleClick = (e) =>{
        console.log("Updating the note ", note)
        e.preventDefault()
    }

    const onChange = (e) =>{
        setNote({...note, [e.target.name]: e.target.value})
    }

  return (
    <>
    <AddNote />
    <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
         Launch demo modal
    </button>

    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="edit_title"
            name="edit_title" 
            value={note.title}
            aria-describedby="emailHelp"
            onChange={onChange}
          />
          </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
          Description
          </label>
          <input
            type="text"
            className="form-control"
            id="edit_description"
            name="edit_description"
            value={note.description}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
          Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="edit_tag"
            name="edit_tag"
            value={note.tag}
            onChange={onChange}
          />
        </div>
        
      </form>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
        </div>
        </div>
    </div>
    </div>

    <div className="row my-3">
      <h2>Your notes</h2>
      {notes.map((note) => {
        return <Noteitem key={note._id} updateNote={updateNote} note={note} />;
      })}
    </div>
    </> 
  );
};

export default Notes;
