import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";


import "./App.scss";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
// import SectionTransition from './components/SectionTransition'

function App() {
  return (
    <div className="App">
      {/* <Switch> */}

        <Home />
        <About />
      {/* </Switch> */}
    </div>
  );
}

export default App;
