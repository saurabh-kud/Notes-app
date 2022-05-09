import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../../Components/Header/header";
import InputCard from "../../Components/InputCard/inputCard";
import Modal from "../../Components/Modal/modal";
import ModalDel from "../../Components/Modal/modalDel";
import NotesList from "../../Components/NotesList/notesList";
import Overlay from "../../Components/overlay/overlay";

function Home() {
  const [Notes, setNotes] = useState(
    localStorage.getItem("Notes")
      ? JSON.parse(localStorage.getItem("Notes"))
      : []
  );
  const [searchText, setSearchText] = useState([]);
  const [text, setText] = useState("");

  //set notes in record
  const handleInput = (Note) => {
    setNotes([...Notes, { ...Note, id: new Date().getTime().toString() }]);
  };

  //local Storange
  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(Notes));
  }, [Notes]);

  // update...
  const handleUpdate = (updatedText) => {
    const newText = Notes.map((note) => {
      return updatedText.id == note.id ? { ...updatedText } : note;
    });
    setNotes(newText);
  };

  //deleting....
  const handleDelete = (id) => {
    setNotes(
      Notes.filter((note) => {
        return id != note.id;
      })
    );
  };

  //searching....
  const handleSearch = (text) => {
    setText(text);
    const search = Notes.filter((note) => {
      return Object.values(note)
        .join(" ")
        .toLowerCase()
        .includes(text.toLowerCase());
    });
    setSearchText(search);
    console.log(searchText);
  };
  const val = text === "" ? Notes : searchText;
  return (
    <div>
      <BrowserRouter>
        <Header search={handleSearch} text={searchText} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <InputCard handleIe={handleInput} />
                {val.length < 1 ? (
                  <h1 className="text-xl font-bold text-red-800 mt-5 text-center">
                    Not avilable
                  </h1>
                ) : (
                  <NotesList Notes={val} />
                )}
              </>
            }
          />

          <Route
            path="/note/:id"
            element={
              <div className="realative ">
                <InputCard handleIe={handleInput} />
                <NotesList Notes={Notes} />
                <Overlay />
                <Modal update={handleUpdate} />
              </div>
            }
          />
          <Route
            path="/note/delete"
            element={
              <div className="realative ">
                <InputCard handleIe={handleInput} />
                <NotesList Notes={Notes} />
                <Overlay />
                <ModalDel delete={handleDelete} />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Home;
