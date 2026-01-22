import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import KaliTerminal from './cyber';
import Home from './home';
import Project from './projects';
import Achieve from './achievements';
import CtfWins from './ctf_wins';
import Dresume from './resume';
import Writeups from './blog';
import ErrorPage from './404';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<KaliTerminal />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/achievements" element={< Achieve/>} />
        <Route path="/ctf-wins" element={<CtfWins />} />
        <Route path="/resume" element={< Dresume/>} />
        <Route path="/writeups" element={< Writeups/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
