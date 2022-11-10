import React from "react";
import {GlobalStyles} from '../Components/GlobalStyles/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "../Pages/Login/Login";
import Home from '../Pages/Home/Home';
import Cadastro from '../Pages/Cadastro/Cadastro'
import Biblioteca from '../Pages/Biblioteca/Biblioteca'
import Emprestimo from '../Pages/Emprestimo/Emprestimo'
import PaginaNaoEncontrada from "../Pages/PaginaNaoEncontrada/PaginaNaoEncontrada";

function App() {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path='cadastro'  element={ <Cadastro />} />
            <Route path='biblioteca' element={ <Biblioteca />} />
            <Route path='emprestimo' element={ <Emprestimo />} />
            <Route path="*" element={<PaginaNaoEncontrada />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
