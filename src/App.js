import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Search from "./pages/search/Search";
import "./App.css";

function App() {
  const linkSearchHandler = (event) => {
    window.location.replace();
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home onLinkSearch={linkSearchHandler} />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
