import React, { useEffect, useState } from "react";
import axios from "axios";

import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
function MenuWrapper() {
  // Declaração dos estados
  const [divisions, setDivisions] = useState([]);
  const [category, setCategory] = useState(0);

  // Funções para manipulação de dados
  function getDivisions() {
    axios.get(`http://localhost:5000/divisions/get`).then((res) => {
      if (category != 0) {
        let filteredData = res.data.filter(
          (division) => division.category == category
        );
        setDivisions(filteredData);
      } else {
        setDivisions(res.data);
      }
    });
  }
  function handleFilterByCategory(category) {
    setCategory(category);
  }

  useEffect(() => {
    getDivisions();
  }, []);

  useEffect(() => {
    getDivisions();
  }, [category]);
  return (
    <div className="flex flex-col min-h-[calc(100%-50px)] items-center  bg-white px-10 py-10">
      <div className="flex mb-10 w-fit">
        <select
          className="form-select
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
          onChange={(e) => handleFilterByCategory(e.target.value)}
        >
          <option defaultValue value="0">
            Escolha uma opção
          </option>
          <option value="1">Universidade</option>
          <option value="2">Programação</option>
          <option value="3">Leitura</option>
        </select>
        <Link to="/division/create">
          <button className="flex items-center text-center ml-10 bg-[#4d8f81] hover:bg-[#4d8f81]/[0.8] text-white font-semibold py-2 px-10  border border-gray-400 rounded shadow">
            <AiOutlinePlus className="text-4xl mr-2" />
            Adicionar seção
          </button>
        </Link>
      </div>

      <div className="flex w-full justify-center">
        {divisions &&
          divisions.map((division, index) => (
            <MenuItem
              key={index}
              category={division.category}
              divisionID={division._id}
              title={division.name}
              subdivisions={division.subdivisions}
              identity={division.identity}
            ></MenuItem>
          ))}
      </div>
    </div>
  );
}

export default MenuWrapper;
