import React from "react";

import { Link } from "react-router-dom";
import { CgNotes } from "react-icons/cg";
function Header() {
  return (
    <div className="flex w-full min-h-[50px] justify-center items-center bg-neutral-800 text-white font-serif text-lg">
      <Link className="flex items-center" to="/">
        <CgNotes></CgNotes>
        <h1 className="cursor-pointer ml-3">StudyManagement</h1>
      </Link>
    </div>
  );
}

export default Header;
