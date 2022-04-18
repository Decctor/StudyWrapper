import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import MenuWrapper from "./components/Home/MenuWrapper";
import DivisionWrapper from "./components/Division/DivisionWrapper";
import Subject from "./components/Subject/Subject";
import DivisionCreation from "./components/Division/DivisionCreation";
function App() {
  return (
    <div className="h-full">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<MenuWrapper></MenuWrapper>}></Route>
          <Route
            path="/division/:identity"
            element={<DivisionWrapper></DivisionWrapper>}
          ></Route>
          <Route
            path="/division/:divisionId/subdivision/:subdivisionId"
            element={<Subject />}
          ></Route>
          <Route path="/division/create" element={<DivisionCreation />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
