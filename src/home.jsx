import React, { useState, useEffect } from "react";
import './home.css';
import Defaultnavbar from "./navbar";
import Sidecontent from "./Content";


const Home = () => {
    const [showBackground, setBackground] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const [showSideContent, setShowSideContent] = useState(false);
   

  useEffect(() => {
    setTimeout(() => setBackground(true), 500);
    setTimeout(() => setShowNavbar(true), 1000); 
    setTimeout(() => setShowSideContent(true), 1500);
   
  }, []);
    return ( <>
    <div className={showBackground && "maincontainer"}>
    {showNavbar && <Defaultnavbar />}
    {showSideContent && <Sidecontent />}
    </div>
    
    </>
     );
}
 
export default Home;