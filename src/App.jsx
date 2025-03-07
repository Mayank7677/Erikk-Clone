import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import NewsPage from "./pages/NewsPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import LocomotiveScroll from "locomotive-scroll";
import ErrorPage from "./components/ErrorPage";
import FormPage from "./components/FormPage";


const App = () => {

  const scroll = new LocomotiveScroll();


  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/work" element={ <WorkPage/> } />
        <Route path="/news" element={ <NewsPage/> } />
        <Route path="/about" element={ <AboutPage/> } />
        <Route path="/services" element={ <ServicesPage/> } />
        <Route path="/form" element={ <FormPage/> } />
        <Route path="/*" element={ <ErrorPage/> } />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;







