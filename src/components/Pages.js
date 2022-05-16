import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Designing from "../pages/Designing";
import Skills from "../pages/Skills";
import ErrorPage from "../pages/ErrorPage";

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/designing" element={<Designing />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
};

export default Pages;
