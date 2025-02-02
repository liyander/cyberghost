import "./ErrorPage.css";
import Error from "./error/404.png";
import Back from "./error/back.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ErrorPage = () => {
    return ( <>
        <Container>
            <Row>
                <Col>
            <div className="back">
                <img className="backimg" src={Back} alt=""  />
            </div>
                </Col>
                <Col>
                <div className="four">
                <h3 className="zero" style={{fontFamily:"'Press Start 2P', monospace",color:"red"}}>404</h3>
                </div>
                </Col>
            </Row>
            <Row>
                <Col>
            <div className="mcfly">
                <img className="fournot" src={Error} alt="404" />
            </div>
                </Col>
                <Col>
                <div className="notfound">
                <Col>
                <Row>
                <h3 className="page" style={{fontFamily:"'Press Start 2P', monospace",color:"white"}}>PAGE</h3>
                </Row>
                <Row>
                <h3 className="not" style={{fontFamily:"'Press Start 2P', monospace",color:"white"}}>NOT</h3>
                </Row>
                <Row>
                <h3 className="found"  style={{fontFamily:"'Press Start 2P', monospace",color:"white"}}>FOUND</h3>
                </Row>
                <Row>
                <h3 className="home" style={{fontFamily:"'Press Start 2P', monospace",color:"white"}}>BACK TO HOME</h3>
                </Row>
                <Row>
                <Col>
                <Button className="yes" onClick={() => window.location.href = '/'} style={{fontFamily:"'Press Start 2P', monospace",color:"white",background:"transparent",border:"none"}}>YES</Button>
                </Col>
                <Col>
                <h3 className="no" style={{fontFamily:"'Press Start 2P', monospace",color:"white"}}>NO</h3>
                </Col>
                </Row>
                </Col>
                
                </div>
                </Col>
            </Row>
        </Container>
      
          </> );
      }
       
export default ErrorPage;
