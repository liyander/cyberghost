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
                <img src={Back} alt="" width="800" />
            </div>
                </Col>
                <Col>
                <div className="four">
                <h3 style={{fontFamily:"'Press Start 2P', monospace",color:"red", fontSize:"100px"}}>404</h3>
                </div>
                </Col>
            </Row>
            <Row>
                <Col>
            <div className="mcfly">
                <img src={Error} alt="404" width="700px" />
            </div>
                </Col>
                <Col>
                <div className="notfound">
                <Col>
                <Row>
                <h3 style={{fontFamily:"'Press Start 2P', monospace",color:"white", fontSize:"50px",width:"50px",paddingLeft:"210px"}}>PAGE</h3>
                </Row>
                <Row>
                <h3 style={{fontFamily:"'Press Start 2P', monospace",color:"white", fontSize:"50px",width:"50px",paddingLeft:"240px"}}>NOT</h3>
                </Row>
                <Row>
                <h3 style={{fontFamily:"'Press Start 2P', monospace",color:"white", fontSize:"50px",width:"50px",paddingLeft:"190px"}}>FOUND</h3>
                </Row>
                <Row>
                <h3 style={{fontFamily:"'Press Start 2P', monospace",color:"white", fontSize:"20px",paddingLeft:"190px",paddingTop:"40px"}}>BACK TO HOME</h3>
                </Row>
                <Row>
                <Col>
                <Button onClick={() => window.location.href = '/'} style={{fontFamily:"'Press Start 2P', monospace",color:"white", fontSize:"15px",paddingLeft:"240px",paddingTop:"30px",background:"transparent",border:"none"}}>YES</Button>
                </Col>
                <Col>
                <h3 style={{fontFamily:"'Press Start 2P', monospace",color:"white", fontSize:"15px",width:"50px",paddingLeft:"20px",paddingTop:"31.8px"}}>NO</h3>
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
