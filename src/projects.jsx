import React, { useState } from 'react';
import './cyber-theme.css'; 
import hedone from "./project/hedone.png";
import bill from "./project/bill.png";
import tony from "./project/tony.png";
import malware from "./project/malware.png";
import sms from "./project/sms.png";
import cis from "./project/cis.png";
import blackops from "./project/blackops.png";
import Bytes from "./project/Bytes.png";
import Ghost from "./project/ghost.png";
import Defaultnavbar from './navbar';
import Helios from './project/helios.png';
import red from './project/red.png';

const projectsData = [
    {
        id: 1,
        title: "Hedone",
        subtitle: "MERN Stack",
        img: hedone,
        description: "An online movie and series Streaming Website. Recommendation engine, user reviews, and binge-watching support.",
        stats: { threat: "Low", encryption: "Standard", lang: "JS/React", status: "Online" },
        link: "https://hedone-d5f2f.web.app"
    },
    {
        id: 2,
        title: "SMS System",
        subtitle: "LAMP Stack",
        img: sms,
        description: "Student Management System to help faculty and students manage various academic and administrative activities.",
        stats: { threat: "Medium", encryption: "128-bit", lang: "PHP/SQL", status: "Active" },
        link: "#"
    },
    {
        id: 3,
        title: "Malware Tool",
        subtitle: "Python",
        img: malware,
        description: "Automated tool to automate basic steps involved in malware analysis including string extraction and malicious link detection.",
        stats: { threat: "High", encryption: "None", lang: "Python", status: "Deployed" },
        link: "https://github.com/liyander/Automated-Malware-Analysis-Tool"
    },
    {
        id: 4,
        title: "CIS Auditing",
        subtitle: "Bash Scripting",
        img: cis,
        description: "Automated auditing scripts designed to establish security hardening by auditing and configuring CIS benchmarks.",
        stats: { threat: "High", encryption: "AES-256", lang: "Bash", status: "Running" },
        link: "#"
    },
    {
        id: 5,
        title: "Desktop AI",
        subtitle: "Python",
        img: tony,
        description: "Automated AI voice assistant for desktop that can answer questions, general knowledge, math, and daily tasks.",
        stats: { threat: "Low", encryption: "256-bit", lang: "Python", status: "Idle" },
        link: "https://github.com/liyander/Personal-Desktop-ai-assistant"
    },
    {
        id: 6,
        title: "Billing App",
        subtitle: "LAMP Stack",
        img: bill,
        description: "Web application to manage billing and stock management. Assists stores to manage billing records.",
        stats: { threat: "Low", encryption: "SSL", lang: "PHP", status: "Active" },
        link: "https://github.com/quixel200/billing_management"
    },
    {
        id: 7,
        title: "BLACKOPS",
        subtitle: "Exploiter",
        img: blackops,
        description: "Comprehensive Field Vulnerability Exploiter for Ethical Hacking and CTF Operations. Precision, automation, and intelligence.",
        stats: { threat: "Critical", encryption: "Military", lang: "Python", status: "Classified" },
        link: "https://github.com/liyander/blackops-field-vulnerability-exploiter"
    },
    {
        id: 8,
        title: "CyberBytes",
        subtitle: "MERN Stack",
        img: Bytes,
        description: "Full-stack blog web application designed for users to create, read, and share blog posts easily.",
        stats: { threat: "Medium", encryption: "TLS 1.3", lang: "MERN", status: "Live" },
        link: "https://cyberbytes-c4wu.vercel.app"
    },
    {
        id: 9,
        title: "CyberGhost",
        subtitle: "MERN Stack",
        img: Ghost,
        description: "This portfolio itself. Reflects passion and growing expertise in ethical hacking and cyber defense.",
        stats: { threat: "None", encryption: "Public", lang: "React", status: "Online" },
        link: "https://cyberghost-portfolio.web.app"
    },
    {
        id: 10,
        title: "Helios",
        subtitle: "Threat Intel",
        img: Helios,
        description: "A real-time threat intelligence monitoring project that tracks live cyber attacks acting as a central dashboard for emerging threats.",
        stats: { threat: "Critical", encryption: "AES-256", lang: "Next.js", status: "In Dev" },
        link: "#"
    },
    {
        id: 11,
        title: "Red Vault",
        subtitle: "Knowledge Hub",
        img: red,
        description: "A cybersecurity knowledge hub designed for penetration testers and red team professionals. Curates tools, techniques, and documentation.",
        stats: { threat: "Low", encryption: "Standard", lang: "Markdown", status: "Active" },
        link: "https://red-vault-3154e.web.app"
    }
];

const Project = () => {
    const [selectedId, setSelectedId] = useState(1);
    const selectedProject = projectsData.find(p => p.id === selectedId) || projectsData[0];

    return (
        <div className="cyber-wrapper">
            {/* Scanline & CRT Effect Layer */}
            <div className="crt-overlay"></div>
            
            <Defaultnavbar />

            <div className="digital-grid">
                
                <main className="cyber-main">
                    
                    {/* Page Heading */}
                    <div className="cyber-header-section">
                        <div className="cyber-header-title">
                            <span className="material-symbols-outlined text-cyber-primary" style={{ fontSize: '2.5rem' }}>radar</span>
                            <h1 className="glow-text uppercase font-black">Select Level</h1>
                        </div>
                        <div className="cyber-status-line">
                            <p className="uppercase font-bold tracking-widest">System Status: Online // Target Database Loaded</p>
                        </div>
                    </div>

                    <div className="cyber-content-grid">
                        
                        {/* Project Grid Column */}
                        <div>
                            <div className="project-card-grid">
                                {projectsData.map((project) => (
                                    <div 
                                        key={project.id}
                                        onClick={() => setSelectedId(project.id)}
                                        className="project-card"
                                    >
                                        <div 
                                            className="project-card-inner"
                                            style={{
                                                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 50%), url(${project.img})`
                                            }}
                                        >
                                            <div className="level-badge">
                                                Lvl {String(project.id).padStart(2, '0')}
                                            </div>
                                            <div className="card-info">
                                                <p className="card-title uppercase">{project.title}</p>
                                                <p className="text-cyber-muted uppercase font-bold" style={{ fontSize: '0.75rem' }}>{project.subtitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Stats Panel Column */}
                        <div className="stats-panel-container">
                            <div className="stats-header">
                                <span className="material-symbols-outlined text-cyber-primary">analytics</span>
                                <h2 className="uppercase font-black tracking-widest" style={{ fontSize: '1.5rem', color: '#fff' }}>Mission Stats</h2>
                            </div>

                            <div className="stats-card">
                                <div className="stats-selection-header">
                                    <p className="text-cyber-primary uppercase font-bold tracking-widest" style={{ fontSize: '0.75rem' }}>Current Selection</p>
                                    <p className="uppercase font-black glow-text" style={{ fontSize: '1.5rem', wordBreak: 'break-word', color: '#fff' }}>
                                        Project: {selectedProject.title.replace(/\s+/g, '_')}
                                    </p>
                                </div>
                                
                                <div className="text-cyber-muted" style={{ fontSize: '0.9rem', lineHeight: '1.6', fontFamily: 'monospace' }}>
                                    {selectedProject.description}
                                </div>

                                <div className="stats-grid">
                                    <div className="stat-box">
                                        <p className="text-cyber-muted uppercase font-black tracking-widest" style={{ fontSize: '0.65rem' }}>Threat Level</p>
                                        <p className="glow-text uppercase font-black" style={{ fontSize: '1.25rem', color: '#fff' }}>{selectedProject.stats.threat}</p>
                                    </div>
                                    <div className="stat-box">
                                        <p className="text-cyber-muted uppercase font-black tracking-widest" style={{ fontSize: '0.65rem' }}>Encryption</p>
                                        <p className="glow-text uppercase font-black" style={{ fontSize: '1.25rem', color: '#fff' }}>{selectedProject.stats.encryption}</p>
                                    </div>
                                    <div className="stat-box">
                                        <p className="text-cyber-muted uppercase font-black tracking-widest" style={{ fontSize: '0.65rem' }}>Core Language</p>
                                        <p className="glow-text uppercase font-black" style={{ fontSize: '1.25rem', color: '#fff' }}>{selectedProject.stats.lang}</p>
                                    </div>
                                    <div className="stat-box">
                                        <p className="text-cyber-muted uppercase font-black tracking-widest" style={{ fontSize: '0.65rem' }}>Status</p>
                                        <p className="glow-text uppercase font-black" style={{ fontSize: '1.25rem', color: '#fff' }}>{selectedProject.stats.status}</p>
                                    </div>
                                </div>

                                <a 
                                    href={selectedProject.link} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="launch-btn"
                                >
                                    Launch Mission
                                </a>

                                <div className="terminal-logs">
                                    <p className="terminal-text">
                                        [TERMINAL]: Initializing secure handshake...<br/>
                                        [TERMINAL]: Bypassing local gateway...<br/>
                                        [TERMINAL]: Accessing encrypted blocks...<br/>
                                        [TERMINAL]: Connection stable.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Ticker */}
                    <footer className="cyber-footer">
                        <div className="footer-score">
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <p className="text-cyber-muted uppercase font-bold tracking-widest" style={{ fontSize: '0.65rem' }}>High Score</p>
                                <p className="glow-text uppercase font-black tracking-widest" style={{ fontSize: '1.25rem', color: '#f9f906' }}>999,999,999</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <p className="text-cyber-muted uppercase font-bold tracking-widest" style={{ fontSize: '0.65rem' }}>Credits</p>
                                <p className="uppercase font-black tracking-widest" style={{ fontSize: '1.25rem', color: '#f9f906' }}>04 / 99</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span className="material-symbols-outlined text-cyber-primary" style={{ fontSize: '1.5rem' }}>joystick</span>
                            <p className="text-cyber-primary uppercase font-bold tracking-widest animate-pulse" style={{ fontSize: '0.85rem' }}>Insert coin to continue...</p>
                        </div>
                    </footer>
                </main>
            </div>
        </div>
    );
}
 
export default Project;
