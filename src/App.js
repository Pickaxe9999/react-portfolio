import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div>
      <Nav></Nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

        <Footer></Footer>

      </div>
    </div>

  );
}

export default App;