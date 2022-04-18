import React from "react";
import { useNavigate } from "react-router-dom";

function DivisionItem(props) {
  let navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate(
          `/division/${props.identityOne}/subdivision/${props.subdivisionID}`,
          {
            state: {
              identityOne: props.identityOne,
              identityTwo: props.identityTwo,
              title: props.title,
              divisionID: props.divisionID,
            },
            replace: false,
          }
        )
      }
      className="flex flex-col items-center justify-center h-[300px] bg-[#f4eb9e] p-8 cursor-pointer grow shadow-md"
    >
      <h1 className="mb-5 text-xl font-black">{props.title}</h1>
    </div>
  );
}

export default DivisionItem;
