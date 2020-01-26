import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import ProjectOne from "./Pages/ProjectOne";
// import SectionTransition from './components/SectionTransition'

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
