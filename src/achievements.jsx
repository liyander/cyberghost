import React, { useState } from "react";
import "./cyber-theme.css";
import Defaultnavbar from "./navbar";
import junior from "./cert/jr.jpg";
import webpen from "./cert/webpen.jpg";
import advent from "./cert/advent.jpg";
import ai from "./cert/ai.jpg";
import api from "./cert/apihacking.jpg";
import external from "./cert/externalpentest.jpg";
import prevesc from "./cert/prevesc.jpg";
import osint from "./cert/osint.jpg";
import python201 from "./cert/python201.jpg";
import soc from "./cert/soc101.jpg";
import webhack from "./cert/webhack.jpg";
import linux101 from "./cert/linux101.jpg";
import cap from "./cert/CAP.jpg";
import forensics from "./cert/forensics.jpg";
import hackquest from "./cert/hackquest.jpg";
import ADAPI from "./cert/ADAPI.jpg";
import CNSP from "./cert/CNSP.jpg";
import CTI from "./cert/CTI.jpg";
import ExploitX from "./cert/exploitX.jpg";
import CYAPO from "./cert/CYAPO.jpg";
import Fullhouse from "./cert/FullHouse.jpg";


// Using existing data mapped to new logic
const certData = [
  { img: python201, title: "Python 101 & 201", desc: "TCM Security. Foundational Python programming for cybersecurity automation.", icon: "🐍", level:"master", date: "2023", type: "SCRIPTING" },
  { img: CTI, title: "Threat Intel", desc: "CTI Certification From ArcX. Analysis and dissemination of threat intelligence.", icon: "🛡️", level:"Beginner", date: "2023", type: "INTEL" },
  { img: CNSP, title: "Net Security", desc: "Certified Network Security Practitioner. Network defense and hardening.", icon: "🌐", level:"Beginner", date: "2023", type: "DEFENSIVE" },
  { img: ExploitX, title: "ExploitX CTF", desc: "International CTF Winner. KPR Institute & EC-Council collaboration.", icon: "💣", level:"Hard", date: "2024", type: "COMPETITION" },
  { img: CYAPO, title: "Cyber Apocalypse", desc: "HackTheBox CTF Participation. Global hacking event involving web, pwn, and crypto challenges.", icon: "👾", level:"Insane", date: "2024", type: "COMPETITION" },
  { img: junior, title: "Jr Pentester", desc: "Tryhackme Junior Penetration Tester Path. Hands-on offensive security methodology.", icon: "🧪", level:"master", date: "2023", type: "OFFENSIVE" },
  { img: webpen, title: "Web Pentesting", desc: "Tryhackme Web Pentesting Path. OWASP Top 10 mastery.", icon: "🌐", level:"Beginner", date: "2023", type: "WEB" },
  { img: external, title: "External Pentest", desc: "TCM Security External Pentest Playbook. OSINT and external infrastructure assessment.", icon: "🔓", level:"beginner", date: "2024", type: "OFFENSIVE" },
  { img: advent, title: "Advent of Cyber", desc: "TryHackMe Annual Event. 24 days of cybersecurity challenges.", icon: "🎄", level:"master", date: "2023", type: "EVENT" },
  { img: ai, title: "AI Engineering", desc: "TCM Security AI & Prompt Engineering. Leveraging LLMs for security tasks.", icon: "🤖", level:"beginner", date: "2024", type: "AI" },
  { img: api, title: "API Hacking", desc: "Practical API Hacking. Testing REST and GraphQL endpoints for vulnerabilities.", icon: "🔌", level:"beginner", date: "2024", type: "WEB" },
  { img: prevesc, title: "PrivEsc", desc: "Windows/Linux Privilege Escalation. Vertical movement techniques.", icon: "🧗", level:"master", date: "2023", type: "OFFENSIVE" },
  { img: osint, title: "OSINT Fund", desc: "Open Source Intelligence Fundamentals. Gathering public information for recon.", icon: "🔍", level:"master", date: "2022", type: "INTEL" },
  { img: soc, title: "SOC 101", desc: "Security Operations Center L1. Log analysis and incident triage.", icon: "🚨", level:"master", date: "2023", type: "BLUE TEAM" },
  { img: webhack, title: "Web Hacking", desc: "Practical Web Hacking. Real-world web application exploitation.", icon: "🌐", level:"master", date: "2023", type: "WEB" },
  { img: linux101, title: "Linux 101", desc: "Linux Essentials for Hackers. Command line proficiency.", icon: "🐧", level:"beginner", date: "2022", type: "OS" },
  { img: cap, title: "AppSec Cert", desc: "Certified APPsec Practitioner (CAP). Securing the SDLC.", icon: "🚩", level:"Beginner", date: "2023", type: "APPSEC" },
  { img: forensics, title: "Forensics", desc: "Digital Forensics Fundamentals. Evidence handling and analysis.", icon: "🧬", level:"master", date: "2023", type: "FORENSICS" },
  { img: hackquest, title: "HackQuest", desc: "National CTF 2nd Runner Up. Web hacking focus.", icon: "🏆", level:"master", date: "2024", type: "COMPETITION" },
  { img: ADAPI, title: "API Pentest", desc: "API Penetration Testing from APISEC University.", icon: "📡", level:"beginner", date: "2023", type: "WEB" },
  { img: Fullhouse, title: "Full House", desc: "HackTheBox Pro Labs. Advanced red team engagement simulation.", icon: "🏠", level:"Insane", date: "2024", type: "RED TEAM" },
];

const openCertificate = (image) => {
  const newTab = window.open();
  newTab.document.write(`<img src="${image}" style="width:100%; height:auto;" />`);
};

const Achievements = () => {
  const [selectedCert, setSelectedCert] = useState(certData[0]);

  return (
    <>
      <Defaultnavbar />
      <div className="cyber-wrapper" style={{ paddingTop: "80px" }}>
        <div className="crt-overlay"></div>

        <div className="gallery-container">
            
          {/* Header */}
          <div className="flex flex-wrap justify-between items-end gap-3 mb-8">
            <div className="flex flex-col gap-1">
              <h1 className="cyber-main-title" style={{ fontSize: '3rem', margin: 0, color: 'var(--cyber-yellow)' }}>
                POWER-UP GALLERY
              </h1>
              <p className="text-cyber-muted text-sm font-medium opacity-80 uppercase tracking-widest">
                ACHIEVEMENT LOG // CREDENTIAL_DATABASE_v8.4
              </p>
            </div>
            
            <div className="flex items-center gap-2 px-3 py-1 bg-[#4a4a21] rounded text-[10px] font-bold text-white tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[var(--cyber-yellow)] animate-pulse"></span>
              Player 1 Status: Online
            </div>
          </div>

          {/* Grid */}
          <div className="gallery-grid">
            {certData.map((cert, index) => (
              <div 
                key={index}
                className={`monitor-block ${selectedCert.title === cert.title ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCert(cert);
                  openCertificate(cert.img);
                }}
              >
                <div className="monitor-icon">{cert.icon}</div>
                <h3 className="monitor-title">{cert.title}</h3>
                <p className="monitor-meta">UNLOCKED: {cert.date}</p>
              </div>
            ))}
          </div>

          {/* Terminal Log Output */}
          <div className="mt-8">
            <div className="terminal-header-top">
              TERMINAL_LOG_OUTPUT
            </div>
            
            <div className="terminal-panel">
              <div className="terminal-content">
                <div className="terminal-line">
                  <span>&gt; INITIALIZING DATA... [SUCCESS]</span>
                  <span className="w-2 h-4 bg-[var(--cyber-yellow)] animate-pulse"></span>
                </div>
                
                <div className="terminal-desc">
                  <span className="text-[var(--cyber-yellow)] font-bold">CERT_TYPE:</span> {selectedCert.type} | 
                  <span className="text-[var(--cyber-yellow)] font-bold ml-2">DIFFICULTY:</span> {selectedCert.level} | 
                  <span className="text-[var(--cyber-yellow)] font-bold ml-2">DESCRIPTION:</span> <br/>
                  <span className="text-white block mt-2">{selectedCert.desc}</span>
                </div>

                <div className="text-[#4a4a21] text-xs italic mt-2">
                  SYS_MSG: SECURE_LINK_ESTABLISHED // DATA_INTEGRITY_CHECK_PASSED
                </div>

                <div className="flex justify-end w-full mt-4">
                  <button className="terminal-action-btn" onClick={() => openCertificate(selectedCert.img)}>
                    DOWNLOAD_TRANSCRIPT
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="cyber-copyright">
             Build v2.0.4 - ARCADE_OS // © 198X SENTINEL SYSTEMS
          </div>

        </div>
      </div>
    </>
  );
};

export default Achievements;
