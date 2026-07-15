import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useLocation } from 'react-router-dom';
import './cyber-navbar.css';
import './site.css';

const modernLinks = [
  ['/projects', '01', 'Projects'], ['/achievements', '02', 'Credentials'], ['/ctf-wins', '03', 'Awards'],
  ['/resume', '04', 'Resume'], ['/writeups', '05', 'Research']
];

export default function Defaultnavbar(){
  const location = useLocation();
  const [open, setOpen] = useState(false);

  if (location.pathname === '/home') {
    return <Navbar expand="lg" className="cyber-navbar cyber-navbar-transparent" variant="dark" style={{position:'absolute',width:'100%',zIndex:10}}>
      <Container fluid>
        <Navbar.Brand href="/home" className="logo">CYBERGHOST_SYS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"><Nav className="ms-auto">
          <Nav.Link href="/home">HOME</Nav.Link><Nav.Link href="/projects">PROJECTS</Nav.Link>
          <Nav.Link href="/achievements">CERTS</Nav.Link><Nav.Link href="/resume">RESUME</Nav.Link>
          <Nav.Link href="/ctf-wins">CTF WINS</Nav.Link><Nav.Link href="/writeups">WRITEUPS</Nav.Link>
        </Nav></Navbar.Collapse>
      </Container>
    </Navbar>;
  }

  return <header className="site-nav">
    <NavLink className="brand" to="/home"><span className="brand-mark">CG</span><span><b>LIYANDER</b><small>SECURITY RESEARCH</small></span></NavLink>
    <button className="menu-button" aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(!open)}><i></i><i></i></button>
    <nav className={open ? 'nav-links open' : 'nav-links'}>{modernLinks.map(([to,index,label])=><NavLink key={to} to={to} onClick={()=>setOpen(false)} className={({isActive})=>isActive?'active':''}><small>{index}</small>{label}</NavLink>)}</nav>
    <a className="nav-cta" href="mailto:liyanderrishwanth18@gmail.com"><span></span> Available for work</a>
  </header>;
}
