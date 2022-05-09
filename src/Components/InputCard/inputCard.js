import React, { useState } from "react";
import "../Outside/outside";
import useComponentVisible from "../Outside/outside";

function InputCard(props) {
  const [note, setNote] = useState({ title: "", discription: "" });
  const [isClick, setIsClick] = useState(false);

  //input state manage
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  ///
  // const { ref, isComponentVisible, setIsComponentVisible } =
  //   useComponentVisible(false);

  // if (isComponentVisible) {
  //   if (note !== "") {
  //     props.handleIe(note);

  //     setNote({ title: "", discription: "" });
  //   }

  // }

  const handleClick = () => {
    if (note.title !== "" || note.discription !== "") {
      props.handleIe(note);
      setNote({ title: "", discription: "" });
      setIsClick(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center m-4 ">
        <div className=" border border-black flex flex-col min-w-[40%] p-2 rounded-md shadow-[0_2px_10px_-5px_rgba(0,0,0,0.9)]">
          {isClick ? (
            <input
              className="outline-none mb-3 placeholder:text-slate-700 placeholder:font-normal font-semibold"
              type="text"
              placeholder="Title"
              name="title"
              onChange={handleChange}
              value={note.title}
            ></input>
          ) : null}
          <textarea
            className="outline-none resize-none placeholder:text-slate-700"
            rows={isClick ? 3 : 1}
            placeholder="Take a note..."
            type="text"
            onClick={() => {
              setIsClick(true);
            }}
            name="discription"
            onChange={handleChange}
            value={note.discription}
          ></textarea>
          <div
            onClick={handleClick}
            className="h-10 w-20 rounded-md flex items-center ml-[20rem] justify-center border border-black hover:bg-blue-700 hover:text-white"
          >
            Add
          </div>
        </div>
      </div>
    </>
  );
}
export default InputCard;
