import React, { useState } from "react";
import { Navigate, useLocation, useNavigate, Link } from "react-router-dom";

function Modal(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, id, discription } = location.state.note;
  const [updateNote, setUpdateNote] = useState({ title, discription, id });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateNote({ ...updateNote, [name]: value });
  };

  const handleClick = () => {
    if (updateNote.title !== "" || updateNote.discription !== "") {
      props.update(updateNote);
      navigate("/");
    } else {
      alert("one field is mandotory");
    }
  };

  return (
    <>
      <div className="min-h-[10rem] min-w-[50%] top-[5rem] left-[15rem] fixed bg-white rounded-md ">
        <div className=" border border-black flex flex-col min-w-[40%] p-2 rounded-md shadow-[0_2px_10px_-5px_rgba(0,0,0,0.9)]">
          <input
            className="outline-none mb-3 placeholder:text-slate-700 font-semibold"
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={updateNote.title}
          ></input>

          <textarea
            className="outline-none resize-none placeholder:text-slate-700"
            rows={3}
            placeholder="Take a note..."
            type="text"
            name="discription"
            onChange={handleChange}
            value={updateNote.discription}
          ></textarea>
          <div className="flex items-center justify-around">
            <div
              onClick={handleClick}
              className="h-10 w-20 rounded-md flex items-center justify-center border border-black hover:bg-red-900 hover:text-white"
            >
              Update
            </div>
            <Link to="/">
              <div className="h-10 w-20 rounded-md flex items-center justify-center border border-black hover:bg-blue-700 hover:text-white">
                NO
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Modal;
