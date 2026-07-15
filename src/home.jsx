import React from "react";
import { Link } from 'react-router-dom';
import Defaultnavbar from "./navbar";
import './site.css';

const Home = () => {
  return <div className="site-shell">
    <Defaultnavbar />
    <main>
      <section className="hero section-pad">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"></span> Security engineer · Available for select opportunities</div>
          <h1>I find the flaws<br/>before they become<br/><em>incidents.</em></h1>
          <p className="hero-lead">Security engineer focused on vulnerability research, cloud security, DevSecOps, and offensive security. I turn complex attack paths into practical fixes.</p>
          <div className="button-row">
            <Link className="button primary" to="/projects">Explore my work <span>↗</span></Link>
            <a className="button ghost" href="/resume_optimized_final.pdf" download>Download résumé <span>↓</span></a>
          </div>
          <div className="social-row">
            <a href="https://www.linkedin.com/in/liyanderrishwanth/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/liyander" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://profile.hackthebox.com/profile/019c4ab6-e83a-7264-831b-ebfa22acf909" target="_blank" rel="noreferrer">Hack The Box ↗</a>
          </div>
        </div>
        <aside className="hero-visual" aria-label="Security research profile summary">
          <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
          <div className="radar-core"><span>18</span><small>published<br/>CVEs</small></div>
          <div className="signal-card signal-top"><span>MAX SEVERITY</span><strong>10.0</strong></div>
          <div className="signal-card signal-bottom"><span>HTB SEASON</span><strong>#312</strong></div>
          <div className="coordinates">08.0883° N<br/>77.5385° E</div>
        </aside>
      </section>

      <section className="metrics section-pad">
        <article><strong>18</strong><span>Published CVEs</span></article>
        <article><strong>10.0</strong><span>Maximum severity</span></article>
        <article><strong>30%</strong><span>Faster incident resolution</span></article>
        <article><strong>4×</strong><span>CTF podium finishes</span></article>
      </section>

      <section className="feature-grid section-pad">
        <div className="section-intro"><span className="kicker">01 / What I do</span><h2>Building resilience<br/>across the stack.</h2></div>
        <div className="service-list">
          <article><span>01</span><div><h3>Vulnerability research</h3><p>Responsible disclosure, attack-surface mapping, exploit validation, and remediation guidance across modern platforms.</p></div></article>
          <article><span>02</span><div><h3>Cloud & DevSecOps</h3><p>Secure AWS and Azure environments, harden CI/CD workflows, and protect Kubernetes and infrastructure-as-code delivery.</p></div></article>
          <article><span>03</span><div><h3>Offensive security</h3><p>Web, API, Active Directory, and adversary-emulation assessments grounded in realistic attacker behavior.</p></div></article>
        </div>
      </section>

      <section className="spotlight section-pad">
        <div className="section-intro light"><span className="kicker">02 / Selected impact</span><h2>Research that<br/>moves the needle.</h2></div>
        <div className="impact-cards">
          <article className="impact-main"><span>Google Mesop AI</span><h3>Path traversal to unauthenticated remote code execution.</h3><p>CVE-2026-33054 · CVE-2026-33057</p><strong>CVSS 10.0</strong></article>
          <article><span>Apple Swift-NIO</span><h3>WebSocket frame decoder remote crash.</h3><p>CVE-2026-43678</p></article>
          <article><span>Directus CMS</span><h3>Access-control and availability research.</h3><p>CVE-2026-35441</p></article>
        </div>
      </section>

      <section className="experience section-pad">
        <div className="section-intro"><span className="kicker">03 / Experience</span><h2>From aerospace networks<br/>to threat intelligence.</h2></div>
        <div className="timeline-modern">
          <article><div><span>Mar 2026 — Present</span><h3>Security Engineering Intern</h3><p>Black Pearl DFIR · Remote</p></div><p>Built centralized threat intelligence and automated response workflows, improving visibility across five critical environments and reducing incident resolution time by 30%.</p></article>
          <article><div><span>Dec 2025 — Jan 2026</span><h3>Cybersecurity Intern</h3><p>Indian Space Research Organisation</p></div><p>Assessed six secured aerospace network segments, investigated critical logs, and authored ten standardized incident response protocols.</p></article>
        </div>
      </section>
    </main>
    <footer className="site-footer section-pad"><div><span className="kicker">Have a security challenge?</span><h2>Let’s make it<br/><em>resilient.</em></h2></div><a href="mailto:liyanderrishwanth18@gmail.com" className="round-link">Start a<br/>conversation ↗</a><p>© 2026 Liyander Rishwanth · Nagercoil, India</p></footer>
  </div>;
}
 
export default Home;
