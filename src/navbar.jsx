import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Defaultnavbar = () => {
  return (
    <Navbar expand="lg" className="body" >
      
        <Navbar.Brand href="#home" className='logo' style={{color:"white"}}>Cyberghost</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/home" style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link href="/projects" style={{color:"white"}}>Projects</Nav.Link>
            <Nav.Link href="/achievements" style={{color:"white"}}>Breakthroughs 0wned</Nav.Link>
            <Nav.Link href="#link" style={{color:"white"}}>Link</Nav.Link>
            <Nav.Link href="#link" style={{color:"white"}}>Link</Nav.Link>
          </Nav>
            </Container>
        </Navbar.Collapse>
      
    </Navbar>
  );
}

export default Defaultnavbar;