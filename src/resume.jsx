import React from "react";
import Defaultnavbar from "./navbar";
import "./resume.css";
import Liyander from "./liyander_new.pdf";
import { FaTerminal, FaDownload } from "react-icons/fa";
import me from "./me.jpg";

const Dresume = () => {
  return (
    <>
      <Defaultnavbar />
      <div className="crt-overlay"></div>
      <div className="resume-container">
        <div className="arcade-cabinet">
          {/* Header */}
          <header className="cabinet-header">
            <div className="header-left">
              <FaTerminal className="text-primary" style={{ fontSize: "1.5rem" }} />
              <h2 className="header-title glow-text">PERSONNEL DOSSIER</h2>
            </div>
            <div className="header-nav">
                <div className="auth-status">
                  <p className="text-wireframe font-bold uppercase" style={{ fontSize: "10px" }}>Auth Status</p>
                  <p className="text-primary font-mono" style={{ fontSize: "12px" }}>ENCRYPTED_SEC_V4</p>
                </div>
                <div className="user-avatar-small">
                  <img src={me} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
            </div>
          </header>

          <div className="cabinet-body">
            {/* Headline */}
            <div className="resume-headline">
              <div className="access-badge">Accessing Encrypted Data...</div>
              <h1 className="main-title">
                TECHNICAL SCHEMATIC: <span className="text-primary glow-text">SYSTEM_RESUME.EXE</span>
              </h1>
              <p className="sub-title">
                Subject: LIYANDER RISHWANTH L // Clearance: LEVEL 5 // Specialization: CYBER DEFENSE & FULL STACK
              </p>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
              <div className="stat-card">
                <p className="stat-label">UPTIME (EXP)</p>
                <p className="stat-value">STUDENT</p>
              </div>
              <div className="stat-card">
                <p className="stat-label">SUCCESS RATE</p>
                <p className="stat-value">TOP 1%</p>
              </div>
              <div className="stat-card">
                <p className="stat-label">SYSTEM CLEARANCE</p>
                <p className="stat-value">ROOT</p>
              </div>
              <div className="stat-card">
                <p className="stat-label">LATENCY</p>
                <p className="stat-value">0.1 MS</p>
              </div>
            </div>

            <div className="content-grid">
              {/* Left Column: Mission History (Projects & Experience) */}
              <div className="left-column">
                <div className="section-header">
                  <h2 className="section-title">MISSION HISTORY</h2>
                  <div className="section-line"></div>
                </div>

                <div className="timeline-list">
                  {/* Item 1 */}
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-header">
                      <h3 className="timeline-role">Hedone: Streaming Platform</h3>
                      <span className="timeline-date">MERN STACK</span>
                    </div>
                    <p className="timeline-company">FULL STACK PROJECT</p>
                    <ul className="timeline-desc">
                      <li><span className="timeline-bullet"></span> Designed movie discovery and streaming platform using MERN stack.</li>
                      <li><span className="timeline-bullet"></span> Implemented real-time data fetching and responsive UI.</li>
                    </ul>
                  </div>

                  {/* Item 2 */}
                  <div className="timeline-item">
                    <div className="timeline-dot secondary"></div>
                    <div className="timeline-header">
                      <h3 className="timeline-role">CTF Competitor</h3>
                      <span className="timeline-date">2023 - PRESENT</span>
                    </div>
                    <p className="timeline-company">HACKTHEBOX, TRYHACKME</p>
                    <ul className="timeline-desc">
                      <li><span className="timeline-bullet"></span> Winner of Exploit-X International CTF.</li>
                      <li><span className="timeline-bullet"></span> Top 1% rank on TryHackMe.</li>
                      <li><span className="timeline-bullet"></span> 2nd Runner-up at HackQuest (National).</li>
                    </ul>
                  </div>

                  {/* Item 3 */}
                  <div className="timeline-item">
                    <div className="timeline-dot secondary"></div>
                    <div className="timeline-header">
                      <h3 className="timeline-role">Automated Security Tools</h3>
                      <span className="timeline-date">PYTHON / BASH</span>
                    </div>
                    <p className="timeline-company">OPEN SOURCE</p>
                    <ul className="timeline-desc">
                      <li><span className="timeline-bullet"></span> Developed Automated CIS Benchmark Tool for Linux/Windows auditing.</li>
                      <li><span className="timeline-bullet"></span> Created mass penetration testing deployment scripts.</li>
                    </ul>
                  </div>
                </div>
                
                {/* Aspiration Section as a Mission Brief */}
                 <div className="section-header" style={{ marginTop: '3rem' }}>
                  <h2 className="section-title">MISSION BRIEF</h2>
                  <div className="section-line"></div>
                </div>
                <p style={{ color: 'var(--text-dim)', lineHeight: '1.6' }}>
                    Dedicated cybersecurity and full-stack development professional. 
                    Skills include Java, OSINT, system security, and software development. 
                    Committed to meaningful work and leveraging technology for positive impact.
                </p>

              </div>

              {/* Right Column: Protocols (Education) & Specs (Skills) */}
              <div className="right-column">
                
                {/* Education & Certs */}
                <section style={{ marginBottom: "2.5rem" }}>
                    <div className="section-header">
                        <h2 className="section-title" style={{ fontSize: "1.25rem" }}>CORE PROTOCOLS</h2>
                    </div>
                    <div className="panel-box">
                        <p className="panel-title">B.Tech CYBER SECURITY</p>
                        <p className="panel-subtitle">Sri Shakthi Institute</p>
                        <p className="panel-sub">EXPECTED 2027</p>
                    </div>
                    <div className="panel-box">
                        <p className="panel-title">TCM SECURITY</p>
                        <p className="panel-subtitle">Python 101/201, OSINT, Linux Prev Esc, SOC 101</p>
                    </div>
                    <div className="panel-box">
                        <p className="panel-title">TRYHACKME / THE SECOPS GROUP</p>
                        <p className="panel-subtitle">Web Hacking, API Hacking, Certified AppSec Practitioner</p>
                    </div>
                </section>

                {/* Skills */}
                <section>
                    <div className="section-header">
                        <h2 className="section-title" style={{ fontSize: "1.25rem" }}>SYSTEM SPECS</h2>
                    </div>
                    
                    <div className="skill-bar-container">
                        <div className="skill-info">
                            <span>Development (Java, JS, React)</span>
                            <span>90%</span>
                        </div>
                        <div className="skill-track">
                            <div className="skill-progress" style={{ width: "90%" }}></div>
                        </div>
                    </div>

                    <div className="skill-bar-container">
                        <div className="skill-info">
                            <span>Cyber Security (Pentest, OSINT)</span>
                            <span>85%</span>
                        </div>
                        <div className="skill-track">
                            <div className="skill-progress" style={{ width: "85%" }}></div>
                        </div>
                    </div>

                    <div className="skill-bar-container">
                        <div className="skill-info">
                            <span>Databases (MySQL, Mongo)</span>
                            <span>80%</span>
                        </div>
                        <div className="skill-track">
                            <div className="skill-progress" style={{ width: "80%" }}></div>
                        </div>
                    </div>

                     <div className="skill-bar-container">
                        <div className="skill-info">
                            <span>Scripting (Bash, Python)</span>
                            <span>88%</span>
                        </div>
                        <div className="skill-track">
                            <div className="skill-progress" style={{ width: "88%" }}></div>
                        </div>
                    </div>
                </section>

                <a className="cyber-btn" href={Liyander} download>
                    <FaDownload style={{ marginRight: "8px" }} />
                    DOWNLOAD INTEL (PDF)
                </a>

              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="cyber-footer">
            <div className="player-status">PLAYER 1: ONLINE</div>
            <div className="footer-credits">
                CPU_LOAD: 2.4% // MEM: 1024KB<br />
                 2026 CYBERGHOST_SYSTEMS
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Dresume;
