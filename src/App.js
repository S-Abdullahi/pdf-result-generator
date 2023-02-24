import React from "react";
import Page from "./Page";
import Home from "./Home";
import Instruction from "./Instruction";
import InputPage from "./InputPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="result" element={<Page />} />
        <Route path='instruction' element={<Instruction />} />
        <Route path='inputpage' element={<InputPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
