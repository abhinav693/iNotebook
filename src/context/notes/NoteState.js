import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all notes
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwNjE3MTAwYzEwNTA3ZWUxMmI0ZWM0In0sImlhdCI6MTY2MTQ4MjE0OX0.amg79JvguYeexTVHFO7b639-WfpOMEvfNU5Y-3ti8xU",
      },
    });
    const json = await response.json();

    setNotes(json);
  };

  //   Add a Note
  const addNote = async (title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwNjE3MTAwYzEwNTA3ZWUxMmI0ZWM0In0sImlhdCI6MTY2MTQ4MjE0OX0.amg79JvguYeexTVHFO7b639-WfpOMEvfNU5Y-3ti8xU",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json()
    console.log(json)

    const note = {
      _id: "630871b8e6880f2f825450f3",
      user: "630617100c10507ee12b4ec4",
      title: title,
      description: description,
      tag: tag,
      date: "2022-08-26T07:09:44.739Z",
      __v: 0,
    };

    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = async (id) => {

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwNjE3MTAwYzEwNTA3ZWUxMmI0ZWM0In0sImlhdCI6MTY2MTQ4MjE0OX0.amg79JvguYeexTVHFO7b639-WfpOMEvfNU5Y-3ti8xU",
        },
  
      });

      const json = await response.json()
      console.log(json)

    console.log("delete this note with id " + id);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwNjE3MTAwYzEwNTA3ZWUxMmI0ZWM0In0sImlhdCI6MTY2MTQ4MjE0OX0.amg79JvguYeexTVHFO7b639-WfpOMEvfNU5Y-3ti8xU",
      },

      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json()
    console.log(json)
    // const json = response.json();

    let newNotes = JSON.parse(JSON.stringify(notes))

    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes)
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
