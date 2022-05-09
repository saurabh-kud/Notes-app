import React from "react";
import { Link } from "react-router-dom";

import { MdDelete } from "react-icons/md";

function NotesCard(props) {
  const { id, title, discription } = props.note;
  return (
    <>
      <div className="border flex flex-col border-slate-400 rounded-md min-w-[23%] min-h-[7rem] p-3 pb-5 max-w-[30%] m-2 hover:shadow-[0_2px_10px_-5px_rgba(0,0,0,0.9)]">
        <Link to={`/note/${id}`} state={{ note: props.note }}>
          <h1 className="font-semibold ">{props.note.title}</h1>
          <h1>{props.note.discription}</h1>
        </Link>
        <Link to="/note/delete" state={{ note: props.note }}>
          <MdDelete className="ml-[10rem]   hover:bg-slate-800/50 rounded-full " />
        </Link>
      </div>
    </>
  );
}
export default NotesCard;
