import React from 'react';
import Defaultnavbar from './navbar';
import './site.css';
import blackops from './project/blackops.png';
import helios from './project/helios.png';
import red from './project/red.png';
import malware from './project/malware.png';
import Bytes from './project/Bytes.png';
import cis from './project/cis.png';

const projects = [
  { title:'DevOps Defender', tag:'AI · DEVSECOPS', image:helios, description:'An AI-driven agent that analyzes telemetry, finds root causes, and deploys remediations across Kubernetes, Terraform, Jenkins, ArgoCD, Prometheus, and Grafana.', link:'https://github.com/liyander' },
  { title:'Cybersecurity Range', tag:'ADVERSARY EMULATION', image:blackops, description:'Attack-and-defend training environment with 100 CTF, privilege-escalation, CVE, and blue-team challenges plus custom Active Directory labs.', link:'https://github.com/liyander' },
  { title:'Cybersecurity Academy', tag:'AI-POWERED LMS', image:Bytes, description:'A practical learning platform built for 500 users with hybrid labs, skill-gap analysis, personalized job matching, and performance analytics.', link:'https://github.com/liyander' },
  { title:'BlackOps', tag:'OFFENSIVE SECURITY', image:blackops, description:'AI-augmented penetration-testing and CTF toolkit combining reconnaissance, exploitation, cryptography, reporting, and post-exploitation workflows.', link:'https://github.com/liyander/blackops-field-vulnerability-exploiter' },
  { title:'Red Vault', tag:'SECURITY KNOWLEDGE', image:red, description:'A structured knowledge hub for red teamers and penetration testers, curating tools, techniques, field notes, and practical research.', link:'https://red-vault-3154e.web.app' },
  { title:'CIS Benchmark Auditor', tag:'BASH · POWERSHELL', image:cis, description:'Automated Linux and Windows auditing scripts designed to evaluate security posture against CIS hardening benchmarks.', link:'https://github.com/liyander' },
  { title:'Malware Analysis Tool', tag:'PYTHON · AUTOMATION', image:malware, description:'Static-analysis automation for string extraction, suspicious URL detection, and repeatable first-pass malware triage.', link:'https://github.com/liyander/Automated-Malware-Analysis-Tool' },
];

export default function Projects(){
  return <div className="page-wrap"><Defaultnavbar/><main className="page-main">
    <header className="page-head"><span className="kicker">Selected systems / 2023—2026</span><h1>Work built for<br/>the real world.</h1><p>Security products, research tooling, and training environments that make complex systems easier to defend.</p></header>
    <section className="card-grid">{projects.map((p,i)=><article className="portfolio-card" key={p.title}>
      <div className="portfolio-image" style={{backgroundImage:`linear-gradient(180deg,transparent,#0d100e),url(${p.image})`}}></div>
      <div className="card-body"><span className="tag">0{i+1} / {p.tag}</span><h2>{p.title}</h2><p>{p.description}</p><a href={p.link} target="_blank" rel="noreferrer">View project ↗</a></div>
    </article>)}</section>
  </main></div>
}
