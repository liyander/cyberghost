import Defaultnavbar from "./navbar";
import "./resume.css";
import Liyander from "./liyander_new.pdf";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaGlobe, FaDownload } from "react-icons/fa";
import me from "./me.jpg"; 
const Dresume = () => {
    return (
        <>
            <Defaultnavbar />
            <div className="resume-hero">
                <div className="resume-avatar">
                    <img
                      src={me}
                      alt="Deadpool Symbol"
                      style={{
                        width: "6.5rem",
                        height: "6.5rem",
                        borderRadius: "50%",
                        border: "3px solid #23263a",
                        boxShadow: "0 2px 12px #0007",
                        objectFit: "cover",
                        background: "#18191c"
                      }}
                    />
                </div>
                <div>
                    <h1 className="resume-name">Liyander Rishwanth L</h1>
                    <h2 className="resume-title">Cyber Security Engineer & Full Stack Developer</h2>
                    <div className="resume-contact">
                        <span><FaEnvelope /> <a href="mailto:liyanderrishwanth18@gmail.com">liyanderrishwanth18@gmail.com</a></span>
                        <span><FaPhone /> +91 86101 64765</span>
                        <span><FaMapMarkerAlt /> Nagercoil, Tamil Nadu</span>
                    </div>
                    <div className="resume-social">
                        <a href="https://www.linkedin.com/in/liyanderrishwanth" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://github.com/liyander" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="http://cyberghost-portfolio.web.app" target="_blank" rel="noopener noreferrer"><FaGlobe /></a>
                    </div>
                    <a className="resume-download-btn" href={Liyander} download>
                        <FaDownload style={{ marginRight: "8px" }} />
                        Download Resume
                    </a>
                </div>
            </div>

            <div className="resume-main">
                <section className="resume-section">
                    <h2>🌟 Aspiration</h2>
                    <p>
                        I am a dedicated cybersecurity and full-stack development professional. My skills include Java programming, OSINT, system security, and software development, backed by practical project experience and advanced security certifications. I am committed to meaningful work, continuous learning, and leveraging technology for positive impact.
                    </p>
                </section>

                <section className="resume-section">
                    <h2>🛠️ Skills</h2>
                    <ul>
                        <li>Java, MongoDB, MySQL, Express.js, Node.js, React.js</li>
                        <li>Deployment: Firebase, Render, Vercel, Cloudinary</li>
                        <li>Windows Forensics, Linux Admin, OSINT</li>
                        <li>Malware Automation, Security Hardening, Custom Scripts</li>
                        <li>Leadership, Teamwork, Problem-Solving</li>
                    </ul>
                </section>

                <section className="resume-section">
                    <h2>🎓 Education</h2>
                    <p><strong>Sri Shakthi Institute of Engineering and Technology</strong></p>
                    <p>B.Tech in Computer Science and Engineering (Cyber Security), Expected 2027</p>
                </section>

                <section className="resume-section">
                    <h2>📜 Certifications</h2>
                    <ul>
                        <li>Python 101 & 201 (TCM Security)</li>
                        <li>OSINT Fundamentals (TCM Security)</li>
                        <li>Linux Privilege Escalation (TCM Security)</li>
                        <li>SOC 101, External Pentesting (TCM Security)</li>
                        <li>Practical Web Hacking, Practical API Hacking, Linux 101, Windows Forensics (TryHackMe)</li>
                        <li>Junior Penetration Tester, Web Application Pentesting, Web Fundamentals (The SecOps Group)</li>
                        <li>Certified AppSec Practitioner, Certified Network Security Practitioner (The SecOps Group)</li>
                        <li>API Penetration Testing (APIsec University)</li>
                        <li>Cyber Threat Intelligence 101 (ArcX)</li>
                    </ul>
                </section>

                <section className="resume-section">
                    <h2>🏆 Achievements</h2>
                    <p>
                        Winner of the international CTF competition Exploit-X and 2nd runner-up at HackQuest (national level). Ranked in the top 1% on TryHackMe. Placed in top 511 among 8130+ teams in Hack The Box: Cyber Apocalypse. Solved challenges on PortSwigger and picoCTF. Solved Fullhouse Pro labs from hackthebox which solved by only few hackers on the entire planet
                    </p>
                </section>

                <section className="resume-section">
                    <h2>💡 Projects</h2>
                    <ul>
                        <li><strong>Hedone:</strong> MERN stack movie discovery and Streaming platform. [<a href="http://hedone-d5f2f.web.app" target="_blank" rel="noopener noreferrer">Visit</a>]</li>
                        <li><strong>Insight-AI:</strong> AI-powered news verification site. (In development)</li>
                        <li><strong>Student Management System:</strong> Admin tool for academic records (PHP, MySQL)</li>
                        <li><strong>Automated CIS Benchmark Tool:</strong> Security auditing for Linux & Windows (Bash, PowerShell, PyQt6)</li>
                        <li><strong>Automated Linux Installation:</strong> Bash script for mass penetration tool deployment</li>
                        <li><strong>Automated Malware Analysis:</strong> Python + VirusTotal API for static analysis</li>
                        <li><strong>Personal AI Desktop Assistant:</strong> Python assistant with APIs (Google, YouTube, Wikipedia, etc.)</li>
                        <li><strong>Billing Management:</strong> Warehouse stock/billing system (LAMP stack)</li>
                        <li><strong>CyberBytes:</strong> Full-stack blog application [<a href="https://cyberbytes-c4wu.vercel.app" target="_blank" rel="noopener noreferrer">Visit</a>]</li>
                        <li><strong>BLACKOPS Exploiter:</strong> Python toolkit for CTF and real-world field exploitation</li>
                    </ul>
                </section>
            </div>
        </>
    );
};

export default Dresume;
