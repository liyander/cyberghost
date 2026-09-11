import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import TypingEffect from './TypingEffect';
import './home.css';

export default function Sidecontent() {
  return <Container as="main" id="home-content" tabIndex={-1} className="whoami">
    <Row>
      <Col xs={12} md={8}>
        <p className="hacker"><span aria-hidden="true"/> Hello earth / Welcome to my corner of the internet</p>
        <h1 className="leo">Liyander<br/><em>Rishwanth.</em></h1>
        <div className="home-terminal"><span className="home-prompt" aria-hidden="true">&gt; whoami</span><TypingEffect /></div>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={6} className="home-introduction">
        <p className="home-lead">Curiosity is the starting point.<br/>Building a safer web is the goal.</p>
        <p className="para">I'm a security engineer, full-stack developer, and OSINT practitioner. I explore how systems break, turn research into practical tools, and build security into the way software is made.</p>
        <div className="home-actions"><Link className="home-primary" to="/projects">Explore my work <span aria-hidden="true">&nearr;</span></Link><Link className="home-secondary" to="/resume">More about me <span aria-hidden="true">&rarr;</span></Link></div>
        <div className="home-expertise" aria-label="Areas of focus"><span>Cloud security</span><span>DevSecOps</span><span>Vulnerability research</span></div>
      </Col>
    </Row>
    <div className="home-bottom"><span>SECURITY-MINDED. BUILDER AT HEART.</span><a href="mailto:liyanderrishwanth18@gmail.com"><i aria-hidden="true"/> Open to opportunities <span aria-hidden="true">&nearr;</span></a></div>
  </Container>;
}
