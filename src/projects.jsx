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

const Project = () => {
    return ( 
        <div className='fullpro'>
        <Defaultnavbar/>
        <Container className='pro'>
          <h1 className='prohead'>Projects</h1>
        <Row>
        <Col>
        <Card border="primary" style={{ width: '25rem' }}>
        <Card.Header>MERN stack</Card.Header>
        <Card.Img variant="top" src={hedone} />
      <Card.Body>
        <Card.Title>Hedone</Card.Title>
        <Card.Text>
        It is an online movie database based website developed with full stack.
        </Card.Text>
        <Button variant="outline-success" href="https://github.com/liyander/Hedone"  >Go somewhere</Button>
      </Card.Body>
      </Card>
        </Col>
        <Col>
        <Card border="primary" style={{ width: '25rem' }}>
        <Card.Header>LAMP stack</Card.Header>
        <Card.Img variant="top" src={sms} />
      <Card.Body>
        <Card.Title>SMS (student Managemnet System) </Card.Title>
        <Card.Text>
        A Web Application designed to help faculty and students manage various academic and administrative activities.
        </Card.Text>
        <Button variant="outline-success">Go somewhere</Button>
      </Card.Body>
      </Card>
        </Col>
        <Col>
        <Card border="primary" style={{ width: '25rem' }}>
        <Card.Header>Python</Card.Header>
        <Card.Img variant="top" src={malware} />
      <Card.Body>
        <Card.Title>Automated-Malware-Analysis-Tool</Card.Title>
        <Card.Text>
        This is python used to do automated static malware analysis.
        </Card.Text>
        <Button variant="outline-success" href="https://github.com/liyander/Automated-Malware-Analysis-Tool" target="_blank" >Go somewhere</Button>
      </Card.Body>
      </Card>
        </Col>
      </Row>
      <Row className='row2'>
        <Col>
        <Card border="primary" style={{ width: '25rem' }}>
        <Card.Header>Bash</Card.Header>
        <Card.Img variant="top" src={cis} />
      <Card.Body>
        <Card.Title>Automated CIS Benchmark Auditing</Card.Title>
        <Card.Text>
        Automated auditing scripts designed for both Linux and Windows environments.
        </Card.Text>
        <Button variant="outline-success">Go somewhere</Button>
      </Card.Body>
      </Card>
        </Col>
        <Col>
        <Card border="primary" style={{ width: '25rem' }}>
        <Card.Header>Python</Card.Header>
        <Card.Img variant="top" src={tony}/>
      <Card.Body>
        <Card.Title>Personal-Desktop-ai-assistant</Card.Title>
        <Card.Text>
        this is an automated ai voice assistant for desktop that can manage day to day aspects
        </Card.Text>
        <Button variant="outline-success">Go somewhere</Button>
      </Card.Body>
      </Card>
        </Col>
        <Col>
        <Card border="primary" style={{ width: '25rem' }}>
        <Card.Header>LAMP stack</Card.Header>
        <Card.Img variant="top" src={bill} />
      <Card.Body>
        <Card.Title>Billing Management Application</Card.Title>
        <Card.Text>
        Web application to manage biiling and stock management in tiles shop
        </Card.Text>
        <Button variant="outline-success">Go somewhere</Button>
      </Card.Body>
      </Card>
        </Col>
      </Row>
    </Container>
    </div>
     );
}
 
export default Project;