// AddNote.tsx

import { useState } from "react";
import { useDispatch } from "react-redux";
import { NotePayload, addNote } from "../state/notesSlice";

const AddNote = () => {
  const [titleText, setTitleText] = useState<string>("");
  const [contentText, setContentText] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(contentText.trim()){
      const newNote: NotePayload = {title: titleText, content: contentText}
      dispatch(addNote(newNote));
      setTitleText("");
      setContentText("");
    }else{
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={titleText}
          onChange={(e) => {
            setTitleText(e.target.value);
            setError(false);
          }}
        />
        <textarea
          name="content"
          placeholder="Add a note..."
          value={contentText}
          onChange={(e) => {
            setContentText(e.target.value);
            setError(false);
          }}
        />
        <button>Add</button>
      </form>
      {error && <h1 className="text-danger text-center my-3">content cannot be empty</h1>}
    </div>
  );
};

export default AddNote;
