import React, { useState, useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
// import QRScanner from "./pages/Scanner";
// import Stream from "./pages/Stream";

import "./App.css";
import HomePageList from "./pages/HomePageList";
import Home from "./pages/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/list" element={<HomePageList />}></Route>
        <Route path="/detail" element={<HomePage />}></Route>
        {/* <Route path="/scanner" element={<QRScanner />}></Route>
        <Route path="/stream" element={<Stream />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
