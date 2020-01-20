import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <h1>My portfolio</h1>
      <Home />
    </div>
  );
}

export default App;
