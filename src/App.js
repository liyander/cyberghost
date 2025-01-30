import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import KaliTerminal from './cyber';
import Home from './home';
import Project from './projects';
import Achieve from './achievements';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<KaliTerminal />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/achievements" element={< Achieve/>} />
      </Routes>
    </Router>
  );
};

export default App;
