import React from "react";

import { ImBin } from "react-icons/im";

function SubjectNote(props) {
  return (
    <div className="flex flex-col justify-between bg-[#f4eb9e] w-[300px] h-[350px] p-5 rounded shadow-xl ">
      <p className="text-center">{props.content}</p>
      <button
        type="button"
        className="flex justify-center px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={() => props.handleNoteDelete(props.id)}
      >
        <ImBin className="" />
      </button>
    </div>
  );
}

export default SubjectNote;
