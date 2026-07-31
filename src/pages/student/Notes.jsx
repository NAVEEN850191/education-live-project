import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import NoteCard from "../../components/NoteCard";
import "./Notes.css";

function Notes() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/api/notes")
      .then((response) => response.json())
      .then((data) => {

        setNotes(data.data);

      })
      .catch((error) => {

        console.error(error);

      });

  }, []);

  return (
    <Layout>

      <h1 className="page-title">
        Notes
      </h1>

      <div className="cards">

        {notes.map((note) => (
          <NoteCard
            key={note.id}
            title={note.title}
            subject={note.subject}
            uploadedBy={note.uploadedBy}
            fileUrl={note.fileUrl}
          />
        ))}

      </div>

    </Layout>
  )
}

export default Notes;