// NotesList.tsx

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { Note, removeNote } from "../state/notesSlice";

const NotesList = () => {

  const notes = useSelector((state:RootState)=>state.notes.notes);
  const dispatch = useDispatch();


  return (
    <div className="d-flex flex-wrap justify-content-center">
      {notes.map((note:Note) => (
        <div key={note.id} className="note">
          <h1>{note.title}</h1>
          <p>{note.content}</p>
          <button className="btn btn-danger" onClick={() => dispatch(removeNote(note.id))}>DELETE</button>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
