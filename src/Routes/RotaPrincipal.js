import React from "react";
import {GlobalStyles} from '../Components/GlobalStyles/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "../Components/Header/Header";
import Login from "../Pages/Login/Login";
import Home from '../Pages/Home/Home'
import PaginaNaoEncontrada from "../Pages/PaginaNaoEncontrada/PaginaNaoEncontrada";

// import {Header} from './Components/Header/styles'

function App() {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Header />
            <Route path="home" element={<Home />} />
            <Route path="*" element={<PaginaNaoEncontrada />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
