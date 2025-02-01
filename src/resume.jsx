import Defaultnavbar from "./navbar";
import "./resume.css";
import Liyander from "./liyander_new.pdf";

const Dresume = () => {
    return (
        <>
            <Defaultnavbar />
            <div className="resume-container">
                <header className="resume-header">
                    <h1>Liyander Rishwanth L</h1>
                    <h2>Cyber Security Engineer</h2>
                    <p><strong>Email:</strong> <a href="mailto:liyanderrishwanth18@gmail.com">liyanderrishwanth18@gmail.com</a></p>
                    <p><strong>Location:</strong> Nagercoil, Tamil Nadu</p>
                    <p>
                        <a href="https://www.linkedin.com/in/liyander-rishwanth" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
                        <a href="https://github.com/liyander" target="_blank" rel="noopener noreferrer"> GitHub</a>
                    </p>
                </header>
                <section>
                    <h2>Aspiration</h2>
                    <p>I am a dedicated cybersecurity and software development professional with a background in bio-maths. My skills include Python programming, OSINT, system security, and software development, backed by practical project experience and advanced security certifications.</p>
                </section>
                <section>
                    <h2>Skills</h2>
                    <ul>
                        <li>Python, Java, C, MERN Stack, MySQL</li>
                        <li>Windows Forensics, Linux Admin</li>
                        <li>OSINT, Malware Automation, Security Hardening</li>
                        <li>Leadership, Teamwork, Problem-Solving</li>
                    </ul>
                </section>
                <section>
                    <h2>Education</h2>
                    <p><strong>Sri Shakthi Institute of Engineering and Technology</strong></p>
                    <p>B.Tech in Computer Science and Engineering (Cyber Security), Expected 2027</p>
                </section>
                <section>
                    <h2>Certifications</h2>
                    <ul>
                        <li>Python 101 & Python 201 (TCM Security)</li>
                        <li>OSINT Fundamentals (TCM Security)</li>
                        <li>Linux Privilege Escalation (TCM Security)</li>
                        <li>Practical Web Hacking (TryHackMe)</li>
                        <li>Certified Appsec Practitioner (The SecOps Group)</li>
                    </ul>
                </section>

                <section>
                    <h2>Achievements</h2>
                    <p>Ranked in the Top 1% on TryHackMe, participated in CTF challenges like Hack The Box University, NahamSec, and PwnSec.</p>
                </section>
                <section>
                    <h2>Projects</h2>
                    <ul>
                        <li><strong>Hedone</strong>: A movie browsing application using MERN Stack.</li>
                        <li><strong>Insight-AI</strong>: AI-based news verification website.</li>
                        <li><strong>Student Management System</strong>: An educational record-keeping system using PHP & MySQL.</li>
                        <li><strong>Automated CIS Benchmark Auditing Tool</strong>: Security auditing for Linux and Windows.</li>
                        <li><strong>Personal AI Desktop Assistant</strong>: A voice-controlled AI assistant using Python.</li>
                    </ul>
                </section>
                <div className="download-btn">
                    <a href={Liyander} download>Download Resume</a>
                </div>
            </div>
        </>
    );
};

export default Dresume;
