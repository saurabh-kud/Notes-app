import React from "react";
import NotesCard from "../NotesCard/notesCard";

function NotesList(props) {
  const renderNotesList = props.Notes.map((note, index) => {
    return <NotesCard key={index} note={note} />;
  });
  return (
    <>
      <div className="flex items-center mx-20 flex-wrap">{renderNotesList}</div>
    </>
  );
}
export default NotesList;
