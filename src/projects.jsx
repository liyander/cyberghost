import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './home.css';
import hedone from "./project/hedone.png";
import bill from "./project/bill.png";
import tony from "./project/tony.png";
import malware from "./project/malware.png";
import sms from "./project/sms.png";
import cis from "./project/cis.png";
import Defaultnavbar from './navbar';
import blackops from "./project/blackops.jpg";
import Bytes from "./project/bytes.png";

const Project = () => {
    return ( 
        <div className='fullpro'>
        <Defaultnavbar/>
        <Container className='pro'>
          <h1 className='prohead'>Projects</h1>
        <Row className='row2'>
        <Col>
        <Card border="primary" className='new' >
        <Card.Header>MERN stack</Card.Header>
        <Card.Img variant="top" src={hedone} />
      <Card.Body>
        <Card.Title>Hedone</Card.Title>
        <Card.Text>
        It is an online movie and series database based website . This website is for seeing details about movies and series with recommandation and user reiviews developed with full stack.
        </Card.Text>
        <Button variant="outline-success" href="https://hedone-d5f2f.web.app"  >Go To The Site</Button>
      </Card.Body>
      </Card>
        </Col>
        <Col>
        <Card border="primary" className='new' >
        <Card.Header>LAMP stack</Card.Header>
        <Card.Img variant="top" src={sms} />
      <Card.Body>
        <Card.Title>SMS (student Managemnet System) </Card.Title>
        <Card.Text>
        A Web Application designed to help faculty and students manage various academic and administrative activities developed with full stack (lamp) stack.
        </Card.Text>
        <Button variant="outline-success">See The Project</Button>
      </Card.Body>
      </Card>
        </Col>
        <Col>
        <Card border="primary" className='new' >
        <Card.Header>Python</Card.Header>
        <Card.Img variant="top" src={malware} />
      <Card.Body>
        <Card.Title>Automated-Malware-Analysis-Tool</Card.Title>
        <Card.Text>
        This is an automated malware analysis tool help to automate the basic steps invloved in malware analysis including string extraction malicious link detection etc. Develop with python
        </Card.Text>
        <Button variant="outline-success" href="https://github.com/liyander/Automated-Malware-Analysis-Tool" target="_blank" >See The Project</Button>
      </Card.Body>
      </Card>
        </Col>
      </Row>
      <Row className='row2'>
        <Col>
        <Card border="primary" className='new' >
        <Card.Header>Bash</Card.Header>
        <Card.Img variant="top" src={cis} />
      <Card.Body>
        <Card.Title>Automated CIS Benchmark Auditing</Card.Title>
        <Card.Text>
        Automated auditing scripts designed to establish security hardening but auditing and configuring cis benchmarks for both Linux and Windows environments.
        </Card.Text>
        <Button variant="outline-success">See The Project</Button>
      </Card.Body>
      </Card>
        </Col>
        <Col>
        <Card border="primary" className='new'>
        <Card.Header>Python</Card.Header>
        <Card.Img variant="top" src={tony}/>
      <Card.Body>
        <Card.Title>Personal-Desktop-ai-assistant</Card.Title>
        <Card.Text>
        this is an automated ai voice assistant for desktop that can answer simple questions and also general knowledge questions and simple math automate daily task and also be your friend.
        </Card.Text>
        <Button variant="outline-success" href="https://github.com/liyander/Personal-Desktop-ai-assistant" target="_blank" >See The Project</Button>
      </Card.Body>
      </Card>
        </Col>
        <Col>
        <Card border="primary" className='new' >
        <Card.Header>LAMP stack</Card.Header>
        <Card.Img variant="top" src={bill} />
      <Card.Body>
        <Card.Title>Billing Management Application</Card.Title>
        <Card.Text>
        Web application to manage biiling and stock management . Created with LAMP Stack. Assist stores to manage billing and manage the billing records
        </Card.Text>
        <Button variant="outline-success" href="https://github.com/quixel200/billing_management" >See The Project</Button>
      </Card.Body>
      </Card>
        </Col>
      </Row>
      <Row className='row2'>
        <Col>
        <Card border="primary" className='new' >
        <Card.Header>Python</Card.Header>
        <Card.Img variant="top" src={blackops} />
      <Card.Body>
        <Card.Title>BLACKOPS Field Vulnerability Exploiter</Card.Title>
        <Card.Text>
        A Comprehensive Field Vulnerability Exploiter for Ethical Hacking and CTF Operations
        </Card.Text>
        <Button variant="outline-success" href='https://github.com/liyander/blackops-field-vulnerability-exploiter'>See The Project</Button>
      </Card.Body>
      </Card>
        </Col>
        <Col>
        <Card border="primary" className='new'>
        <Card.Header>MERN</Card.Header>
        <Card.Img variant="top" src={Bytes}/>
      <Card.Body>
        <Card.Title>CyberBytes</Card.Title>
        <Card.Text>
        CyberBytes is a full-stack blog web application designed for users to create, read, and share blog posts easily. It integrates modern technologies and cloud services for a seamless user experience.
        </Card.Text>
        <Button variant="outline-success" href="https://github.com/liyander/Personal-Desktop-ai-assistant" target="_blank" >See The Project</Button>
      </Card.Body>
      </Card>
        </Col>
      </Row>
    </Container>
    </div>
     );
}
 
export default Project;