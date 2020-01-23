import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Switch> */}
        <Navbar />
        <Home />
      {/* </Switch> */}
    </div>
  );
}

export default App;
