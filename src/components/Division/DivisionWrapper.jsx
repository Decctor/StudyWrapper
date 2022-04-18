import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import DivisionItem from "./DivisionItem";

function DivisionWrapper(props) {
  // Recebendo informações pelo react-router-dom
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-[calc(100%-50px)]  items-center  bg-white px-10 py-10 overflow-x-hidden">
      <div className="flex mb-20 w-2/3 justify-around">
        <h1 className="text-5xl italic font-bold text-[#686466]">
          {state.title}
        </h1>
        <button
          onClick={() =>
            navigate("/division/create", {
              state: {
                divisionName: state.title,
                subdivisions: state.subdivisions,
                category: state.category,
                divisionID: state.divisionID,
              },
              replace: false,
            })
          }
          className="bg-[#f3a36b] hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Alterar seção
        </button>
      </div>
      <div className=" flex w-full flex-wrap gap-2">
        {state.subdivisions.map((subject, index) => (
          <DivisionItem
            key={subject}
            divisionID={state.divisionID}
            identityOne={state.identity}
            subdivisionID={index}
            title={subject}
            identityTwo={state.title}
          ></DivisionItem>
        ))}
      </div>
    </div>
  );
}

export default DivisionWrapper;
