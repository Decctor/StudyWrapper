import React, { useState, useEffect } from "react";
import axios from "axios";

import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function DivisionCreation() {
  // Acessando dados pelo react-router-dom
  const { state } = useLocation();
  // Definindo estados para coleta de dados do formulário
  const [divisionName, setDivisionName] = useState("");
  const [subdivisions, setSubDivisions] = useState([]);
  const [subdivisionName, setSubdivisionName] = useState("");
  const [category, setCategory] = useState("0");
  // Definindo useEffect para mount do componente com dados vindos da rota (se houverem)
  useEffect(() => {
    if (state) {
      setDivisionName(state.divisionName);
      setSubDivisions(state.subdivisions);
      setCategory(state.category.toString());
    }
  }, []);
  // Definindo funções para manipulação de eventos
  function handleSubdivisionAddition() {
    setSubDivisions([...subdivisions, subdivisionName]);
    setSubdivisionName("");
  }
  function handleSubdivisionDelete(index) {
    let newSubdivision = subdivisions.filter(
      (subd, filterIndex) => index != filterIndex
    );
    setSubDivisions(newSubdivision);
  }
  function handleDivisionCreation() {
    // Checando se evento será de alteração
    if (state) {
      axios
        .put(`http://localhost:5000/divisions/create/${state.divisionID}`, {
          divisionName: divisionName,
          subdivisions: subdivisions,
          category: Number(category),
        })
        .then(() =>
          toast.info("Seção alterada", {
            position: toast.POSITION.BOTTOM_CENTER,
          })
        );
    } else {
      axios
        .post("http://localhost:5000/divisions/create", {
          divisionName: divisionName,
          subdivisions: subdivisions,
          category: Number(category),
        })
        .then(() =>
          toast.success("Seção criada", {
            position: toast.POSITION.BOTTOM_CENTER,
          })
        );
    }
    // Zerando o componente
    setDivisionName("");
    setCategory("0");
    setSubDivisions([]);
    setSubdivisionName("");
  }
  function handleDivisionDelete() {
    axios
      .delete(`http://localhost:5000/divisions/delete/${state.divisionID}`)
      .then(() =>
        toast.warn("Seção excluída", {
          position: toast.POSITION.BOTTOM_CENTER,
        })
      );
    setDivisionName("");
    setCategory("0");
    setSubDivisions([]);
    setSubdivisionName("");
  }
  return (
    <div className="flex flex-col min-h-[calc(100%-50px)] items-center  bg-white px-10 py-10">
      <h1 className="font-medium font-serif leading-tight text-4xl mt-0 mb-2 text-white">
        Criação de seção
      </h1>
      <div className="w-2/3 bg-neutral-800 p-10 shadow-lg">
        <label
          htmlFor="categoryNameInput"
          className="form-label inline-block mb-2 text-white"
        >
          Nome da seção
        </label>
        <input
          type="text"
          value={divisionName}
          className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        mb-3
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
          id="categoryNameInput"
          placeholder="Digita o nome da seção..."
          onChange={(e) => setDivisionName(e.target.value)}
        />
        <label
          className="form-label inline-block mb-2 text-white"
          htmlFor="categorySelect"
        >
          Categoria
        </label>
        <select
          value={category}
          id="categorySelect"
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
      mb-3
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option defaultValue value="0">
            Escolha uma opção
          </option>
          <option value="1">Universidade</option>
          <option value="2">Programação</option>
          <option value="3">Leitura</option>
        </select>
        <label
          htmlFor="divisionSubdivisions"
          className="form-label inline-block mb-2 text-white"
        >
          Subseções
        </label>
        <div className="flex" id="divisionSubdivisions">
          <input
            type="text"
            value={subdivisionName}
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        mb-3
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        mr-2
      "
            onChange={(e) => setSubdivisionName(e.target.value)}
            placeholder="Adicione subseções..."
          />
          <button
            onClick={handleSubdivisionAddition}
            className=" bg-white h-[38px] hover:bg-gray-100 text-gray-800 font-semibold px-2 border border-gray-400 rounded shadow"
          >
            Adicionar
          </button>
        </div>
        <div className="mt-2 flex w-full  flex-wrap">
          {subdivisions &&
            subdivisions.map((subdivision, index) => (
              <span className="flex bg-[#839cb5] text-black px-2 py-1 mr-3 mt-2 rounded">
                {subdivision}
                <button
                  className="bg-red-400 ml-2 rounded text-xs p-1 text-black font-semibold"
                  onClick={() => {
                    handleSubdivisionDelete(index);
                  }}
                >
                  X
                </button>
              </span>
            ))}
        </div>
        <button
          className={`${
            state ? "bg-[#f3a36b]" : "bg-[#4d8f81]"
          } px-3 py-2 rounded font-semibold mt-3 text-black`}
          onClick={handleDivisionCreation}
        >
          {state ? "Alterar seção" : "Criar seção"}
        </button>
        {state && (
          <button
            className="bg-red-500 px-3 py-2 rounded font-semibold ml-2 text-black"
            onClick={handleDivisionDelete}
          >
            Deletar seção
          </button>
        )}
      </div>
      <ToastContainer autoClose={3000} theme="colored" />
    </div>
  );
}

export default DivisionCreation;
