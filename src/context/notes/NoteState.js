import NoteContext  from "./noteContext"
import { useState } from "react"

const NoteState = (props) =>{    
    const notesInitial = [
        {
          "_id": "630871b8e6880f2f825450f5",
          "user": "630617100c10507ee12b4ec4",
          "title": "New Note",
          "description": "Wake up Sid",
          "tag": "kbhi bhi",
          "date": "2022-08-26T07:09:44.739Z",
          "__v": 0
        },
        {
          "_id": "6309b250dc9a3f251a8c61ae",
          "user": "630617100c10507ee12b4ec4",
          "title": "First Note",
          "description": "Wake up kid",
          "tag": "kuch bhi kaise bhai",
          "date": "2022-08-27T05:57:36.203Z",
          "__v": 0
        },
        {
            "_id": "630871b8e6880f2f825450f5",
            "user": "630617100c10507ee12b4ec4",
            "title": "New Note",
            "description": "Wake up Sid",
            "tag": "kbhi bhi",
            "date": "2022-08-26T07:09:44.739Z",
            "__v": 0
          },
          {
            "_id": "630871b8e6880f2f825450f5",
            "user": "630617100c10507ee12b4ec4",
            "title": "New Note",
            "description": "Wake up Sid",
            "tag": "kbhi bhi",
            "date": "2022-08-26T07:09:44.739Z",
            "__v": 0
          },
          {
            "_id": "630871b8e6880f2f825450f5",
            "user": "630617100c10507ee12b4ec4",
            "title": "New Note",
            "description": "Wake up Sid",
            "tag": "kbhi bhi",
            "date": "2022-08-26T07:09:44.739Z",
            "__v": 0
          },
          {
            "_id": "630871b8e6880f2f825450f5",
            "user": "630617100c10507ee12b4ec4",
            "title": "New Note",
            "description": "Wake up Sid",
            "tag": "kbhi bhi",
            "date": "2022-08-26T07:09:44.739Z",
            "__v": 0
          },
          {
            "_id": "630871b8e6880f2f825450f5",
            "user": "630617100c10507ee12b4ec4",
            "title": "New Note",
            "description": "Wake up Sid",
            "tag": "kbhi bhi",
            "date": "2022-08-26T07:09:44.739Z",
            "__v": 0
          },
          {
            "_id": "630871b8e6880f2f825450f5",
            "user": "630617100c10507ee12b4ec4",
            "title": "New Note",
            "description": "Wake up Sid",
            "tag": "kbhi bhi",
            "date": "2022-08-26T07:09:44.739Z",
            "__v": 0
          },
          {
            "_id": "630871b8e6880f2f825450f5",
            "user": "630617100c10507ee12b4ec4",
            "title": "New Note",
            "description": "Wake up Sid",
            "tag": "kbhi bhi",
            "date": "2022-08-26T07:09:44.739Z",
            "__v": 0
          }
      ]
      
      const [notes, setNotes] = useState(notesInitial)


    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;