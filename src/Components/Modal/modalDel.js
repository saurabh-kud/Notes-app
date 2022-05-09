import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

function ModalDel(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, id, discription } = location.state.note;

  const handleClick = () => {
    props.delete(id);
    navigate("/");
  };

  return (
    <>
      <div className="min-h-[10rem] min-w-[50%] top-[5rem] left-[15rem] fixed bg-white rounded-md p-5 flex flex-col gap-5 ">
        <h1 className="font-xl block text-center">Do you want to delete it?</h1>
        <div className="flex items-center justify-around">
          <div
            onClick={handleClick}
            className="h-10 w-20 rounded-md flex items-center justify-center border border-black hover:bg-red-900 hover:text-white"
          >
            Yes
          </div>
          <Link to="/">
            <div className="h-10 w-20 rounded-md flex items-center justify-center border border-black hover:bg-blue-700 hover:text-white">
              NO
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
export default ModalDel;
