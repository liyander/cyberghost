import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './home.css';
import Defaultnavbar from './navbar';
import owsap from "./cert/owsap.jpg";
import junior from "./cert/jr.jpg";
import webpen from "./cert/webpen.jpg";
import web from "./cert/web.jpg";
import advent from "./cert/advent.jpg";
import ai from "./cert/ai.jpg";
import api from "./cert/apihacking.jpg";
import external from "./cert/externalpentest.jpg";
import prevesc from "./cert/prevesc.jpg";
import osint from "./cert/osint.jpg";
import python101 from "./cert/python101.jpg";
import python201 from "./cert/python201.jpg";
import soc from "./cert/soc101.jpg";
import webhack from "./cert/webhack.jpg";
import linux101 from "./cert/linux101.jpg";
import cap from "./cert/CAP.jpg";
import hbt from "./cert/hbt.jpg";
import nahom from "./cert/nahom.jpg";

const Achieve = () => {
    return ( 
        <>
    <Defaultnavbar/>
    <div className="breaking_bad"></div>
    <div className='contents'>
    <Container>
        <h1 style={{fontFamily:"'Press Start 2P', monospace"}} >Hall of Fame </h1>
    <div className="tryhackme" style={{paddingTop:"30px"}}>
        <h3 style={{fontFamily:"'Press Start 2P', monospace"}}>Tryhackme:</h3>
     <Row style={{paddingTop:"30px"}}>
     <Col className="d-flex">
     <Card
                className="position-relative"
                  style={{ width: "350px", height: "250px", overflow: "hidden" ,backgroundSize: "cover" }}
                >
                  <Card.Img
                    className="cardimg"
                    variant="top"
                    src={junior}
                    style={{ height: "100%", objectFit: "cover" }}
                  />
    <div
    className="position-absolute top-0 start-0 w-100 h-100  bg-opacity-0 d-flex flex-column justify-content-end text-white p-3"
            style={{
                transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                e.currentTarget.querySelector(".info").style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0)";
                e.currentTarget.querySelector(".info").style.opacity = "0";
                }}
    >
    <div
    className="info"
            style={{
                opacity: 0,
                transition: "opacity 0.3s ease",
                }}
                >
                <h5 className="mb-2">Jr Penetration Tester</h5>
                <p className="mb-2">Issed by: Tryhackme</p>
                <p></p>
                
                </div>
                </div>
                </Card>
     </Col>
     <Col className="d-flex">
     <Card
                className="position-relative"
                  style={{ width: "350px", height: "250px", overflow: "hidden" ,backgroundSize: "cover" }}
                >
                  <Card.Img
                    className="cardimg"
                    variant="top"
                    src={webpen}
                    style={{ height: "100%", objectFit: "cover" }}
                  />
    <div
    className="position-absolute top-0 start-0 w-100 h-100  bg-opacity-0 d-flex flex-column justify-content-end text-white p-3"
            style={{
                transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                e.currentTarget.querySelector(".info").style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0)";
                e.currentTarget.querySelector(".info").style.opacity = "0";
                }}
    >
    <div
    className="info"
            style={{
                opacity: 0,
                transition: "opacity 0.3s ease",
                }}
                >
                <h5 className="mb-2">Web Application Penetesting</h5>
                <p className="mb-2">Issed by: Tryhackme</p>
                <p></p>
                
                </div>
                </div>
                </Card>
     </Col>
     <Col className="d-flex">
     <Card
                className="position-relative"
                  style={{ width: "350px", height: "250px", overflow: "hidden" ,backgroundSize: "cover" }}
                >
                  <Card.Img
                    className="cardimg"
                    variant="top"
                    src={web}
                    style={{ height: "100%", objectFit: "cover" }}
                  />
    <div
    className="position-absolute top-0 start-0 w-100 h-100  bg-opacity-0 d-flex flex-column justify-content-end text-white p-3"
            style={{
                transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                e.currentTarget.querySelector(".info").style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0)";
                e.currentTarget.querySelector(".info").style.opacity = "0";
                }}
    >
    <div
    className="info"
            style={{
                opacity: 0,
                transition: "opacity 0.3s ease",
                }}
                >
                <h5 className="mb-2">Web fundamentals</h5>
                <p className="mb-2">Issed by: Tryhackme</p>
                <p></p>
                
                </div>
                </div>
                </Card>
     </Col>
     </Row>
     <Row style={{paddingTop:"40px"}}>
     <Col className="d-flex">
     <Card
                className="position-relative"
                  style={{ width: "350px", height: "250px", overflow: "hidden" ,backgroundSize: "cover" }}
                >
                  <Card.Img
                    className="cardimg"
                    variant="top"
                    src={advent}
                    style={{ height: "100%", objectFit: "cover" }}
                  />
    <div
    className="position-absolute top-0 start-0 w-100 h-100  bg-opacity-0 d-flex flex-column justify-content-end text-white p-3"
            style={{
                transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                e.currentTarget.querySelector(".info").style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0)";
                e.currentTarget.querySelector(".info").style.opacity = "0";
                }}
    >
    <div
    className="info"
            style={{
                opacity: 0,
                transition: "opacity 0.3s ease",
                }}
                >
                <h5 className="mb-2">Web fundamentals</h5>
                <p className="mb-2">Issed by: Tryhackme</p>
                <p></p>
                
                </div>
                </div>
                </Card>
     </Col>
     </Row>
     </div>
     <div className="tcm" style={{paddingTop:"60px",paddingBottom:"40px"}}>
     <h3 style={{fontFamily:"'Press Start 2P', monospace"}} >TCM-Security:</h3>
     <Row style={{paddingTop:"30px"}}>
     <Col className="d-flex">
     <Card
                className="position-relative"
                  style={{ width: "350px", height: "250px", overflow: "hidden" ,backgroundSize: "cover" }}
                >
                  <Card.Img
                    className="cardimg"
                    variant="top"
                    src={webhack}
                    style={{ height: "100%", objectFit: "cover" }}
                  />
    <div
    className="position-absolute top-0 start-0 w-100 h-100  bg-opacity-0 d-flex flex-column justify-content-end text-white p-3"
            style={{
                transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                e.currentTarget.querySelector(".info").style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0)";
                e.currentTarget.querySelector(".info").style.opacity = "0";
                }}
    >
    <div
    className="info"
            style={{
                opacity: 0,
                transition: "opacity 0.3s ease",
                }}
                >
                <h5 className="mb-2">Practical Web Hacking</h5>
                <p className="mb-2">Issed by: TCM-Security</p>
                <p></p>
                
                </div>
                </div>
                </Card>
     </Col>
     <Col className="d-flex">
     <Card
                className="position-relative"
                  style={{ width: "350px", height: "250px", overflow: "hidden" ,backgroundSize: "cover" }}
                >
                  <Card.Img
                    className="cardimg"
                    variant="top"
                    src={linux101}
                    style={{ height: "100%", objectFit: "cover" }}
                  />
    <div
    className="position-absolute top-0 start-0 w-100 h-100  bg-opacity-0 d-flex flex-column justify-content-end text-white p-3"
            style={{
                transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                e.currentTarget.querySelector(".info").style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0)";
                e.currentTarget.querySelector(".info").style.opacity = "0";
                }}
    >
    <div
    className="info"
            style={{
                opacity: 0,
                transition: "opacity 0.3s ease",
                }}
                >
                <h5 className="mb-2">Linux 101</h5>
                <p className="mb-2">Issed by: TCM-Security</p>
                <p></p>
                
                </div>
                </div>
                </Card>
     </Col>
     <Col className="d-flex">
     <Card
                className="position-relative"
                  style={{ width: "350px", height: "250px", overflow: "hidden" ,backgroundSize: "cover" }}
                >
                  <Card.Img
                    className="cardimg"
                    variant="top"
                    src={api}
                    style={{ height: "100%", objectFit: "cover" }}
                  />
    <div
    className="position-absolute top-0 start-0 w-100 h-100  bg-opacity-0 d-flex flex-column justify-content-end text-white p-3"
            style={{
                transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                e.currentTarget.querySelector(".info").style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0)";
                e.currentTarget.querySelector(".info").style.opacity = "0";
                }}
    >
    <div
    className="info"
            style={{
                opacity: 0,
                transition: "opacity 0.3s ease",
                }}
                >
                <h5 className="mb-2">Practical API Hacking</h5>
                <p className="mb-2">Issed by: TCM-Security</p>
                <p></p>
                
                </div>
                </div>
                </Card>
     </Col>
     </Row>
     <Row style={{paddingTop:"30px"}}>
     <Col className="d-flex">
     <Card
                className="position-relative"
                  style={{ width: "350px", height: "250px", overflow: "hidden" ,backgroundSize: "cover" }}
                >
                  <Card.Img
                    className="cardimg"
                    variant="top"
                    src={ai}
                    style={{ height: "100%", objectFit: "cover" }}
                  />
    <div
    className="position-absolute top-0 start-0 w-100 h-100  bg-opacity-0 d-flex flex-column justify-content-end text-white p-3"
            style={{
                transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                e.currentTarget.querySelector(".info").style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0)";
                e.currentTarget.querySelector(".info").style.opacity = "0";
                }}
    >
    <div
    className="info"
            style={{
                opacity: 0,
                transition: "opacity 0.3s ease",
                }}
                >
                <h5 className="mb-2">Programming with AI</h5>
                <p className="mb-2">Issed by: TCM-Security</p>
                <p></p>
                
                </div>
                </div>
                </Card>
     </Col>
     <Col className="d-flex">
     <Card
                className="position-relative"
                  style={{ width: "350px", height: "250px", overflow: "hidden" ,backgroundSize: "cover" }}
                >
                  <Card.Img
                    className="cardimg"
                    variant="top"
                    src={external}
                    style={{ height: "100%", objectFit: "cover" }}
                  />
    <div
    className="position-absolute top-0 start-0 w-100 h-100  bg-opacity-0 d-flex flex-column justify-content-end text-white p-3"
            style={{
                transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                e.currentTarget.querySelector(".info").style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0)";
                e.currentTarget.querySelector(".info").style.opacity = "0";
                }}
    >
    <div
    className="info"
            style={{
                opacity: 0,
                transition: "opacity 0.3s ease",
                }}
                >
                <h5 className="mb-2">Programming with AI (mini course)</h5>
                <p className="mb-2">Issed by: TCM-Security</p>
                <p></p>
                
                </div>
                </div>
                </Card>
     </Col>
     <Col className="d-flex">
     <Card
                className="position-relative"
                  style={{ width: "350px", height: "250px", overflow: "hidden" ,backgroundSize: "cover" }}
                >
                  <Card.Img
                    className="cardimg"
                    variant="top"
                    src={osint}
                    style={{ height: "100%", objectFit: "cover" }}
                  />
    <div
    className="position-absolute top-0 start-0 w-100 h-100  bg-opacity-0 d-flex flex-column justify-content-end text-white p-3"
            style={{
                transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                e.currentTarget.querySelector(".info").style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0)";
                e.currentTarget.querySelector(".info").style.opacity = "0";
                }}
    >
    <div
    className="info"
            style={{
                opacity: 0,
                transition: "opacity 0.3s ease",
                }}
                >
                <h5 className="mb-2">OSINT Fundamentals</h5>
                <p className="mb-2">Issed by: TCM-Security</p>
                <p></p>
                
                </div>
                </div>
                </Card>
     </Col>
     </Row>
     <Row style={{paddingTop:"30px"}}>
     <Col className="d-flex">
     <Card
                className="position-relative"
                  style={{ width: "350px", height: "250px", overflow: "hidden" ,backgroundSize: "cover" }}
                >
                  <Card.Img
                    className="cardimg"
                    variant="top"
                    src={prevesc}
                    style={{ height: "100%", objectFit: "cover" }}
                  />
    <div
    className="position-absolute top-0 start-0 w-100 h-100  bg-opacity-0 d-flex flex-column justify-content-end text-white p-3"
            style={{
                transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                e.currentTarget.querySelector(".info").style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0)";
                e.currentTarget.querySelector(".info").style.opacity = "0";
                }}
    >
    <div
    className="info"
            style={{
                opacity: 0,
                transition: "opacity 0.3s ease",
                }}
                >
                <h5 className="mb-2">Linux Privilege Escalation For Beginners</h5>
                <p className="mb-2">Issed by: TCM-Security</p>
                <p></p>
                
                </div>
                </div>
                </Card>
     </Col>
     <Col className="d-flex">
     <Card
                className="position-relative"
                  style={{ width: "350px", height: "250px", overflow: "hidden" ,backgroundSize: "cover" }}
                >
                  <Card.Img
                    className="cardimg"
                    variant="top"
                    src={python101}
                    style={{ height: "100%", objectFit: "cover" }}
                  />
    <div
    className="position-absolute top-0 start-0 w-100 h-100  bg-opacity-0 d-flex flex-column justify-content-end text-white p-3"
            style={{
                transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                e.currentTarget.querySelector(".info").style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0)";
                e.currentTarget.querySelector(".info").style.opacity = "0";
                }}
    >
    <div
    className="info"
            style={{
                opacity: 0,
                transition: "opacity 0.3s ease",
                }}
                >
                <h5 className="mb-2">Python101</h5>
                <p className="mb-2">Issed by: TCM-Security</p>
                <p></p>
                
                </div>
                </div>
                </Card>
     </Col>
     <Col className="d-flex">
     <Card
                className="position-relative"
                  style={{ width: "350px", height: "250px", overflow: "hidden" ,backgroundSize: "cover" }}
                >
                  <Card.Img
                    className="cardimg"
                    variant="top"
                    src={python201}
                    style={{ height: "100%", objectFit: "cover" }}
                  />
    <div
    className="position-absolute top-0 start-0 w-100 h-100  bg-opacity-0 d-flex flex-column justify-content-end text-white p-3"
            style={{
                transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                e.currentTarget.querySelector(".info").style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0)";
                e.currentTarget.querySelector(".info").style.opacity = "0";
                }}
    >
    <div
    className="info"
            style={{
                opacity: 0,
                transition: "opacity 0.3s ease",
                }}
                >
                <h5 className="mb-2">Python 201</h5>
                <p className="mb-2">Issed by: TCM-Security</p>
                <p></p>
                
                </div>
                </div>
                </Card>
     </Col>
     </Row>
     <Row style={{paddingTop:"30px"}} >
     <Col className="d-flex">
     <Card
                className="position-relative"
                  style={{ width: "350px", height: "250px", overflow: "hidden" ,backgroundSize: "cover" }}
                >
                  <Card.Img
                    className="cardimg"
                    variant="top"
                    src={soc}
                    style={{ height: "100%", objectFit: "cover" }}
                  />
    <div
    className="position-absolute top-0 start-0 w-100 h-100  bg-opacity-0 d-flex flex-column justify-content-end text-white p-3"
            style={{
                transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                e.currentTarget.querySelector(".info").style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0)";
                e.currentTarget.querySelector(".info").style.opacity = "0";
                }}
    >
    <div
    className="info"
            style={{
                opacity: 0,
                transition: "opacity 0.3s ease",
                }}
                >
                <h5 className="mb-2">SOC 101</h5>
                <p className="mb-2">Issed by: TCM-Security</p>
                <p></p>
                
                </div>
                </div>
                </Card>
     </Col>
     </Row>
     </div>
     <div className="tryhackme" style={{paddingTop:"30px"}}>
        <h3 style={{fontFamily:"'Press Start 2P', monospace"}} >Certification Exams:</h3>
     <Row style={{paddingTop:"30px"}}>
     <Col className="d-flex">
     <Card
                className="position-relative"
                  style={{ width: "350px", height: "250px", overflow: "hidden" ,backgroundSize: "cover" }}
                >
                  <Card.Img
                    className="cardimg"
                    variant="top"
                    src={cap}
                    style={{ height: "100%", objectFit: "cover" }}
                  />
    <div
    className="position-absolute top-0 start-0 w-100 h-100  bg-opacity-0 d-flex flex-column justify-content-end text-white p-3"
            style={{
                transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                e.currentTarget.querySelector(".info").style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0)";
                e.currentTarget.querySelector(".info").style.opacity = "0";
                }}
    >
    <div
    className="info"
            style={{
                opacity: 0,
                transition: "opacity 0.3s ease",
                }}
                >
                <h5 className="mb-2">Certified Appsec Practitioner</h5>
                <p className="mb-2">Issed by: offsec</p>
                <p></p>
                
                </div>
                </div>
                </Card>
     </Col>
     </Row>
     </div>
     <div className="extra" style={{paddingTop:"50px",paddingBottom:"60px"}}>
        <h3 style={{fontFamily:"'Press Start 2P', monospace"}} >Extra Activities:</h3>
     <Row style={{paddingTop:"40px"}}>
     <Col className="d-flex">
     <Card
                className="position-relative"
                  style={{ width: "350px", height: "250px", overflow: "hidden" ,backgroundSize: "cover" }}
                >
                  <Card.Img
                    className="cardimg"
                    variant="top"
                    src={hbt}
                    style={{ height: "100%", objectFit: "cover" }}
                  />
    <div
    className="position-absolute top-0 start-0 w-100 h-100  bg-opacity-0 d-flex flex-column justify-content-end text-white p-3"
            style={{
                transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                e.currentTarget.querySelector(".info").style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0)";
                e.currentTarget.querySelector(".info").style.opacity = "0";
                }}
    >
    <div
    className="info"
            style={{
                opacity: 0,
                transition: "opacity 0.3s ease",
                }}
                >
                <h5 className="mb-2">Hack The Box University CTF</h5>
                <p className="mb-2">Issed by: Hack The Box</p>
                <p></p>
                
                </div>
                </div>
                </Card>
     </Col>
     <Col className="d-flex">
     <Card
                className="position-relative"
                  style={{ width: "350px", height: "250px", overflow: "hidden" ,backgroundSize: "cover" }}
                >
                  <Card.Img
                    className="cardimg"
                    variant="top"
                    src={nahom}
                    style={{ height: "100%", objectFit: "cover" }}
                  />
    <div
    className="position-absolute top-0 start-0 w-100 h-100  bg-opacity-0 d-flex flex-column justify-content-end text-white p-3"
            style={{
                transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                e.currentTarget.querySelector(".info").style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0)";
                e.currentTarget.querySelector(".info").style.opacity = "0";
                }}
    >
    <div
    className="info"
            style={{
                opacity: 0,
                transition: "opacity 0.3s ease",
                }}
                >
                <h5 className="mb-2">Nahom CTF</h5>
                <p className="mb-2">Issed by: Nahomcon</p>
                <p></p>
                
                </div>
                </div>
                </Card>
     </Col>
     <Col className="d-flex">
     <Card
                className="position-relative"
                  style={{ width: "350px", height: "250px", overflow: "hidden" ,backgroundSize: "cover" }}
                >
                  <Card.Img
                    className="cardimg"
                    variant="top"
                    src={owsap}
                    style={{ height: "100%", objectFit: "cover" }}
                  />
    <div
    className="position-absolute top-0 start-0 w-100 h-100  bg-opacity-0 d-flex flex-column justify-content-end text-white p-3"
            style={{
                transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                e.currentTarget.querySelector(".info").style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0)";
                e.currentTarget.querySelector(".info").style.opacity = "0";
                }}
    >
    <div
    className="info"
            style={{
                opacity: 0,
                transition: "opacity 0.3s ease",
                }}
                >
                <h5 className="mb-2">OWSAP Hacker's Meetup</h5>
                <p className="mb-2">Issed by: Owsap,hacker's meetup and Defcon</p>
                <p></p>
                
                </div>
                </div>
                </Card>
     </Col>
     </Row>
     </div>
    </Container>
    </div> 
    </>
    );
}
 
export default Achieve;