// App.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import AddNote from "./components/AddNote";
import NotesList from './components/NotesList'
import "./index.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <AddNote />
      <NotesList />
    </>
  );
}

export default App;
