import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './home.css';
import TypingEffect from './TypingEffect'; 


const Sidecontent = () => {
    return ( 
        <>
         <Container className='whoami'>
      <Row>
        <Col xs={12} md={8}>
          <h5 className='hacker'>
            Hello earth
          </h5>
          <h1 className='leo' style={{color:"white", display: "inline-block"}}>
  whoami <TypingEffect className='typing' />
</h1>

          <div style={{marginTop: "10px", marginBottom: "10px"}}>
            
          </div>
        </Col>
       
      </Row>

      <Row>
        <Col xs={6} md={5}>
          <p className='para'>I am a passionate cybersecurity enthusiast, 
            full-stack developer, and OSINT practitioner 
            with a strong foundation in ethical hacking, 
            network security, and web application security. 
            With expertise in Python, C, Java, and the MERN 
            stack, he has worked on various projects, 
            including malware analysis automation tools, 
            AI-powered verification systems, and cybersecurity
            auditing tools. A TryHackMe top 1% player, 
            he has completed multiple TCM Security certifications, 
            demonstrating his skills in penetration testing, 
            incident response, and API security. Cyber Ghost is also 
            a team leader, having led teams in the Smart India Hackathon,
            and is dedicated to building innovative security solutions 
            and automation tools.</p>
        </Col>
      </Row>
    </Container>
        </>
     );
}
 
export default Sidecontent;