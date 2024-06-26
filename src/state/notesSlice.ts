// notesSlice.ts

import { PayloadAction, nanoid, createSlice } from "@reduxjs/toolkit";

export interface Note {
  id: string;
  title: string;
  content: string;
}

export interface NotePayload {
  title: string;
  content: string;
}

export interface NoteState {
  notes: Note[];
}

const initialState: NoteState = {
  notes: [],
};

const prepareNote = (note: NotePayload) => ({
  payload: {
    id: nanoid(),
    ...note,
  },
});

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: {
      reducer: (state, action: PayloadAction<Note>) => {
        state.notes.push(action.payload);
      },
      prepare: prepareNote,
    },
    removeNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNote, removeNote } = notesSlice.actions;
export default notesSlice.reducer;
