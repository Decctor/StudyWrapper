import React from "react";
import { useNavigate } from "react-router-dom";

function MenuItem(props) {
  let navigate = useNavigate();

  return (
    <div
      onClick={() =>
        navigate(`/division/${props.identity}`, {
          state: {
            identity: props.identity,
            subdivisions: props.subdivisions,
            title: props.title,
            category: props.category,
            divisionID: props.divisionID,
          },
          replace: false,
        })
      }
      className="flex flex-col items-center justify-start mx-1.5 h-[300px] rounded-lg w-[500px] bg-[#f4eb9e] p-8 cursor-pointer overflow-y-auto overflow-x-hidden "
    >
      <h1 className="mb-5 text-xl font-black">{props.title}</h1>

      <ul className="flex flex-col items-center">
        {props.subdivisions.map((subd) => (
          <li key={subd} className="text-[#4f393c] italic">
            {subd}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuItem;
