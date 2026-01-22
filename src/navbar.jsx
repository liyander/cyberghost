import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';
import './cyber-navbar.css'; 

const Defaultnavbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/home';

  return (
    <Navbar 
      expand="lg" 
      className={`cyber-navbar ${isHome ? 'cyber-navbar-transparent' : ''}`} 
      variant="dark"
      style={isHome ? { position: 'absolute', width: '100%', zIndex: 10 } : {}}
    >
      <Container fluid>
        <Navbar.Brand href="/home" className='logo'>CYBERGHOST_SYS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/home">HOME</Nav.Link>
            <Nav.Link href="/projects">PROJECTS</Nav.Link>
            <Nav.Link href="/achievements">CERTS</Nav.Link>
            <Nav.Link href="/resume">RESUME</Nav.Link>
            <Nav.Link href="/ctf-wins">CTF WINS</Nav.Link>
            <Nav.Link href="/writeups">WRITEUPS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Defaultnavbar;
