import React from 'react';
import Defaultnavbar from './navbar';
import Sidecontent from './Content';
import './home.css';
import './home-refresh.css';

export default function Home() {
  return <div className="maincontainer home-page">
    <a className="home-skip-link" href="#home-content">Skip to introduction</a>
    <Defaultnavbar />
    <Sidecontent />
  </div>;
}
