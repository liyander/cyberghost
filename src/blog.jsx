import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './home.css';
import Defaultnavbar from './navbar';
import sky from "./writeups/sky.png";
import steel from "./writeups/steel.png";
import simple from "./writeups/simple.png"

const Writeups = () => {
  return (
    <>
    <div className="blogfull"></div>
    <Defaultnavbar/>
    <Container className="mt-4" >
        <h1 style={{color:"white"}} >Tryhackme : </h1>
        <Container className="mt" >
      <div className="resource-card d-flex bg-dark text-white p-3 rounded shadow" >
        <div className="left bg-secondary p-3 d-flex flex-column align-items-center text-center rounded">
          <Image src={simple} alt="Course Logo" width="200px" className="mb-2" />
          
        </div>

        <div className="right ms-3">
          <h5>Simple CTF</h5>
          <p className="text-light small">
          Simple CTF is a beginner-level CTF on Tryhackme that explores basic skills like scanning, enumeration, exploitation, and privilege escalation.
          </p>
          <a href="https://medium.com/@liyanderrishwanth18/tryhackme-simple-ctf-writeup-e5b5a5829cb6" target="_blank" rel="noopener noreferrer" className="text-primary">
            medium blog
          </a>
        </div>

      </div>
      </Container>
    <Container className="mt" >
      <div className="resource-card d-flex bg-dark text-white p-3 rounded shadow" >
        <div className="left bg-secondary p-3 d-flex flex-column align-items-center text-center rounded">
          <Image src={sky} alt="Course Logo" width="200px" className="mb-2" />
          
        </div>

        <div className="right ms-3">
          <h5>Skynet </h5>
          <p className="text-light small">
          A vulnerable Terminator themed Linux machine.
          </p>
          <a href="https://github.com/MalwareCube/SOC101.git" target="_blank" rel="noopener noreferrer" className="text-primary">
            medium blog
          </a>
        </div>

      </div>
      </Container>
      <Container className="mt last" >
      <div className="resource-card d-flex bg-dark text-white p-3 rounded shadow" >
        <div className="left bg-secondary p-3 d-flex flex-column align-items-center text-center rounded">
          <Image src={steel} alt="Course Logo" width="200px" className="mb-2" />
          
        </div>

        <div className="right ms-3">
          <h5>Steel Mountain</h5>
          <p className="text-light small">
          Hack into a Mr. Robot themed Windows machine. Use metasploit for initial access, utilise powershell for Windows privilege escalation enumeration and learn a new technique to get Administrator access.
          </p>
          <a href="https://github.com/MalwareCube/SOC101.git" target="_blank" rel="noopener noreferrer" className="text-primary">
            medium blog
          </a>
        </div>

      </div>
      </Container>
      
    </Container>
    </>
  );
}

export default Writeups;
