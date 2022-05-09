import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header(props) {
  const textEl = useRef("");

  const handleChange = () => {
    props.search(textEl.current.value);
  };

  return (
    <>
      <div className="flex border-b-[0.1rem] h-16 p-3 justify-between items-center shadow-[box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);]">
        <Link to="/">
          <div className="flex items-center">
            <img
              className="h-10 w-10"
              src="https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png"
            />
            <h1 className="text-4xl font-bold">Keeper</h1>
          </div>
        </Link>
        <div className="flex gap-2 items-center h-6 w-[20rem] mr-[25rem] px-3 py-5 border bg-slate-100  rounded-lg  w-60 max-w-xs">
          <FaSearch className="opacity-50" />
          <input
            ref={textEl}
            className="outline-none bg-slate-100"
            type="text"
            placeholder="search..."
            onChange={handleChange}
            value={props.searchText}
          ></input>
        </div>
      </div>
    </>
  );
}

export default Header;
