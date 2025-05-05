import React from "react";
import "./certifications.css";
import Defaultnavbar from "./navbar";
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
//import python101 from "./cert/python101.jpg";
import python201 from "./cert/python201.jpg";
import soc from "./cert/soc101.jpg";
import webhack from "./cert/webhack.jpg";
import linux101 from "./cert/linux101.jpg";
import cap from "./cert/CAP.jpg";
//import hbt from "./cert/hbt.jpg";
//import nahom from "./cert/nahom.jpg";
import forensics from "./cert/forensics.jpg";
import hackquest from "./cert/hackquest.jpg"
import ADAPI from "./cert/ADAPI.jpg";
import CNSP from "./cert/CNSP.jpg";
import CTI from "./cert/CTI.jpg";
import ExploitX from "./cert/exploitX.jpg";
import CYAPO from "./cert/CYAPO.jpg";


const certifications = [
  { icon: "🐍", title: "Python 101 & Python 201", desc: "Mastering Python Fundamentals From TCM Security", link: python201 },
  { icon: "🛡️", title: "Cyber Threat Intelligence", desc: "CTI Certification Rrom ArcX", link: CTI },
  { icon: "🌐", title: "Certified Network Security Practitioner", desc: "CNSP Certification From Secops", link: CNSP },
  { icon: "🔍", title: "OSINT Fundamentals", desc: "Advanced Open-Source Intelligence From TCM Security", link: osint  },
  { icon: "🐧", title: "Linux Privilege Escalation", desc: "Mastering Prevesc From TCM Security Certification", link: prevesc },
  { icon: "⚡", title: "Security Operation Center 101", desc: "Security Operations Center Basics From TCM Security", link: soc },
  { icon: "🛡️", title: "External Pentesting", desc: "Mastering Pentesting From TCM Security",link: external },
  { icon: "🔗", title: "API Penetration Testing", desc: "API Penetration Testing (12 hours) from APISEC University", link: ADAPI },
  { icon: "💻", title: "Practical API Hacking", desc: "Hands-on API security From TCM Security",link: api },
  { icon: "🌐", title: "Practical Web Hacking", desc: "Advanced Web Vulnerability Testing From TCM Security",link:webhack },
  { icon: "🐧", title: "Linux 101", desc: "Introduction to Linux Systems From Linux 101",link: linux101 },
  { icon: "🕵️", title: "Windows Forensics", desc: "Forensics Training From TCM Security",link: forensics },
  { icon: "🌐", title: "Web Fundamentals", desc: "Application Security Mastery From Tryhackme", link: web },
  { icon: "🛡️", title: "Certified Appsec Practitioner", desc: "Web App Pentest Certification From The Secops Group Certification" ,link:cap },
  { icon: "🕵️", title: "Junior Penetration Tester", desc: "Mastering Pentesting From TryHackMe Certification", link: junior },
  { icon: "🌍", title: "Web Application PenTesting", desc: "Mastering Pentesting From TryHackMe Certification", link: webpen },
  { icon: "🤖", title: "Programming with AI", desc: "Understanding AI-driven development", link: ai },
  { icon: "🤝", title: "OWASP Hackers Meetup", desc: "Networking and Learning with Security Experts", link: owsap },
  { icon: "🏆", title: "HackQuest CTF", desc: "Second Runner Up Of Nation-level CTF CyberHeals Capture The Flag Competition", link:hackquest},
  { icon: "🏆", title: "Exploit-X CTF", desc: "Winner Of International CTF Exploit-X", link:ExploitX},
  { icon: "🎄", title: "Advent of Cyber", desc: "TryHackMe's Cybersecurity Christmas Event", link: advent },
  { icon: "🧩", title: "Cyber Apocalypse CTF 2025", desc: "Ranked 511th among 8130 teams in Cyber Apocalypse CTF 2025 - Tales from Eldoria", link: CYAPO },
];

const openCertificate = (image) => {
  const newTab = window.open();
  newTab.document.write(`<img src="${image}" style="width:100%; height:auto;" />`);
};

const achieve = () => {
  return (
    <>
    <Defaultnavbar/>
    <div className="certifications">
    <h2>📜 C3rtificati0ns 0wned</h2>
      <div className="cert-container">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <span className="icon">{cert.icon}</span>
            <h3>{cert.title}</h3>
            <p>{cert.desc}</p>
            <button style={{border:"none",background:"transparent",color:"white"}} onClick={()=> openCertificate(cert.link) } >View Certificate →</button>
          </div>
        ))}
      </div>
    </div>
  </>
  );
};

export default achieve;
