import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import noteContext from "../context/notes/noteContext"
import AddNote from "./AddNote";
import Noteitem from "./Noteitem";

const Notes = (props) => {
    const context = useContext(noteContext)
    const {notes, getNotes, editNote} = context
    const [note, setNote] = useState({id:"", edit_title:"", edit_description:"", edit_tag:"default"})
    const ref = useRef(null)
    const refClose = useRef(null)

    let history = useHistory()

    useEffect(() => {
      if(localStorage.getItem('token')){
        getNotes()
      }
      else{
        history.push("/login")
      }
    })

    const updateNote = (currentNote) =>{
        ref.current.click()
        setNote({id: currentNote._id, edit_title: currentNote.title, edit_description: currentNote.description, edit_tag: currentNote.tag})
    }


    const handleClick = (e) =>{
        console.log("Updating the note ", note)
        editNote(note.id, note.edit_title, note.edit_description, note.edit_tag)
        refClose.current.click()
        props.showAlert("Updated Successfully", "success")
    }

    const onChange = (e) =>{
        setNote({...note, [e.target.name]: e.target.value})
    }

  return (
    <>
    <AddNote showAlert={props.showAlert}/>
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
            minLength={5}
            required
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
            minLength={5}
            required
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
            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button disabled={note.edit_title.length < 5 || note.edit_description.length < 5} type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
        </div>
        </div>
    </div>
    </div>

    <div className="row my-3">
      <h2>Your notes</h2>
      <div className="container">
      {notes.length === 0 && 'No Notes to display'}
      </div>
      {notes.map((note) => {
        return <Noteitem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert}/>;
      })}
    </div>
    </> 
  );
};

export default Notes;
