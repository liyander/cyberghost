import React from 'react';
import Defaultnavbar from './navbar';
import './site.css';
import resumePdf from './liyander_new.pdf';

const skills=['AWS','Azure','IAM','Kubernetes','Docker','Terraform','Jenkins','Prometheus','Grafana','Burp Suite Pro','Metasploit','Nmap','Nessus','Wireshark','Splunk','Ghidra','Python','JavaScript','Bash','PowerShell','React','Node.js','Flask','MongoDB','MySQL'];

export default function Resume(){
 return <div className="page-wrap"><Defaultnavbar/><main className="page-main resume-layout">
   <aside className="resume-aside"><span className="kicker">Personnel profile / 2026</span><h1>Liyander<br/>Rishwanth L.</h1><p className="hero-lead">Security Engineer · Cloud Security & DevSecOps · Vulnerability Research</p><a className="button primary" href={resumePdf} download>Download full résumé ↓</a><div className="contact-list"><a href="mailto:liyanderrishwanth18@gmail.com">liyanderrishwanth18@gmail.com</a><a href="https://www.linkedin.com/in/liyanderrishwanth/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/liyander" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://profile.hackthebox.com/profile/019c4ab6-e83a-7264-831b-ebfa22acf909" target="_blank" rel="noreferrer">Hack The Box ↗</a></div></aside>
   <div>
    <section className="resume-section"><h2>Profile</h2><div className="resume-item"><p>Security engineer specializing in cloud security, DevSecOps, application security, and offensive security research. Published 18 CVEs—including a maximum-severity remote-code-execution finding—with acknowledgments from Apple, Microsoft, Oracle, and Google. Invited to the MSRC Researcher Celebration at Black Hat USA 2026.</p></div></section>
    <section className="resume-section"><h2>Experience</h2><div className="resume-item"><h3>Security Engineering Intern</h3><p className="meta">Black Pearl DFIR · Mar 2026—Present · Remote</p><ul><li>Engineered a centralized threat intelligence dashboard for Tata Agritas across five critical networks and systems.</li><li>Reduced incident resolution time by 30% and saved 15 hours weekly through automated response workflows.</li></ul></div><div className="resume-item"><h3>Cybersecurity Intern</h3><p className="meta">Indian Space Research Organisation · Dec 2025—Jan 2026</p><ul><li>Performed risk assessments across six secured aerospace network segments.</li><li>Improved workflow efficiency by 25% and authored ten incident response protocols.</li></ul></div></section>
    <section className="resume-section"><h2>Vulnerability research</h2><div className="resume-item"><h3>18 published CVEs</h3><ul><li>Apple Swift-NIO WebSocket decoder remote crash — CVE-2026-43678.</li><li>Google Mesop AI path traversal and remote code execution — CVE-2026-33054, CVE-2026-33057.</li><li>Budibase authorization bypass and credential exposure — CVE-2026-50137.</li><li>Directus CMS access-control and availability flaw — CVE-2026-35441.</li><li>Five responsible disclosures across Microsoft and Oracle products.</li></ul></div></section>
    <section className="resume-section"><h2>Technical toolkit</h2><div className="skill-chips">{skills.map(s=><span key={s}>{s}</span>)}</div></section>
    <section className="resume-section"><h2>Education</h2><div className="resume-item"><h3>B.Tech Computer Science & Engineering (Cybersecurity)</h3><p className="meta">Sri Shakthi Institute of Engineering and Technology · 2023—2027</p><p>GPA: 8.6 / 10.0</p></div></section>
   </div>
 </main></div>
}
