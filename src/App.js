import React from "react";
// import { BrowserRouter,Routes, Route } from "react-router-dom";
import {GlobalStyles} from './Components/GlobalStyles/styles'
import Header from "./Components/Header/Header";
import Login from "./Pages/Login/Login";

// import {Header} from './Components/Header/styles'

function App() {
  return (
    <>
      <GlobalStyles />
      <Login />
    </>
  );
}

export default App;
