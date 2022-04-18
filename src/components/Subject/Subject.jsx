import React, { useEffect, useState } from "react";
import axios from "axios";

import { useLocation } from "react-router-dom";

import SubjectNote from "./SubjectNote";
function Subject() {
  // Acessando dados pelo react-router-dom(useLocation) e
  // Definindo um identificador para uso no banco de dados
  const { state } = useLocation();
  console.log(state);
  let identifier = `${state.identityTwo} - ${state.title}`;
  // Declarando estados
  const [notes, setNotes] = useState([]);
  const [noteContent, setNoteContent] = useState("");
  // Definindo função de acesso as notas no banco de dados
  function getNotes() {
    axios
      .post("http://localhost:5000/notes/get", {
        identifier: identifier,
      })
      .then((res) => {
        setNotes(res.data);
      });
  }

  useEffect(() => {
    getNotes();
  }, []);
  // Definindo funções para manipulação de eventos
  function handleNoteCreation() {
    axios
      .post("http://localhost:5000/notes/add", {
        divisionID: state.divisionID,
        identifier: identifier,
        content: noteContent,
      })
      .then(() => {
        setNoteContent("");
        getNotes();
      });
  }
  function handleNoteDelete(id) {
    axios
      .delete(`http://localhost:5000/notes/delete/${id}`)
      .then(() => getNotes());
  }

  return (
    <div className="flex flex-col min-h-[calc(100%-50px)]  items-center  bg-white px-10 py-10">
      <h1 className="text-[#686466] text-xl italic">{state.title}</h1>
      <div className="flex flex-col my-4 w-3/5">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label inline-block mb-2 text-gray-700"
        >
          Faça sua anotação
        </label>
        <textarea
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          className="
          resize-none
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Digite suas anotações"
        ></textarea>
        <div className="flex items-center w-full mt-3">
          <button
            type="button"
            className="mr-4 px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
            onClick={handleNoteCreation}
          >
            Salvar
          </button>
          <button
            type="button"
            className="px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => setNoteContent("")}
          >
            Limpar
          </button>
        </div>
      </div>
      <div className="flex gap-10 mt-10 flex-wrap">
        {notes &&
          notes.map((note, index) => (
            <SubjectNote
              key={index}
              id={note._id}
              content={note.content}
              handleNoteDelete={handleNoteDelete}
            ></SubjectNote>
          ))}
      </div>
    </div>
  );
}

export default Subject;
