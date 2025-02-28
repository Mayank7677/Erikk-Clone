import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";


const App = () => {

  // const scroll = new LocomotiveScroll();



  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/work" element={ <WorkPage/> } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;







