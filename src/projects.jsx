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
  {title:'DevOps Defender',tag:'AI / DEVSECOPS',image:helios,description:'Autonomous diagnostic agent that analyzes telemetry, finds root causes, and deploys remediations across Kubernetes, Terraform, Jenkins, ArgoCD, Prometheus, and Grafana.',link:'https://github.com/liyander',status:'RESEARCH BUILD'},
  {title:'Cybersecurity Range',tag:'ADVERSARY EMULATION',image:blackops,description:'Attack-and-defend environment with 100 CTF, privilege-escalation, CVE, and blue-team challenges plus custom Active Directory labs.',link:'https://github.com/liyander',status:'ACTIVE LAB'},
  {title:'Cybersecurity Academy',tag:'AI-POWERED LMS',image:Bytes,description:'A practical learning platform serving 500 users with hybrid labs, skill-gap analysis, personalized matching, and performance analytics.',link:'https://github.com/liyander',status:'500 USERS'},
  {title:'BlackOps',tag:'OFFENSIVE SECURITY',image:blackops,description:'AI-augmented penetration-testing toolkit combining reconnaissance, exploitation, cryptography, reporting, and post-exploitation workflows.',link:'https://github.com/liyander/blackops-field-vulnerability-exploiter',status:'OPEN SOURCE'},
  {title:'Red Vault',tag:'SECURITY KNOWLEDGE',image:red,description:'A structured knowledge system for red teamers, curating tools, techniques, field notes, and practical security research.',link:'https://red-vault-3154e.web.app',status:'LIVE'},
  {title:'CIS Benchmark Auditor',tag:'BASH / POWERSHELL',image:cis,description:'Automated Linux and Windows auditing scripts that evaluate system security against CIS hardening benchmarks.',link:'https://github.com/liyander',status:'AUTOMATED'},
  {title:'Malware Analysis Tool',tag:'PYTHON / AUTOMATION',image:malware,description:'Static-analysis automation for string extraction, suspicious URL detection, and repeatable first-pass malware triage.',link:'https://github.com/liyander/Automated-Malware-Analysis-Tool',status:'OPEN SOURCE'}
];

export default function Projects(){return <div className="page-wrap projects-page"><Defaultnavbar/><main className="page-main">
  <header className="page-head split-head"><div><span className="kicker">01 / SELECTED SYSTEMS</span><h1>Built to survive<br/><em>real threats.</em></h1></div><div className="head-aside"><p>Security platforms, offensive tooling, and training systems designed for measurable impact.</p><div className="mini-stats"><span><b>07</b> systems</span><span><b>100+</b> labs</span><span><b>500</b> users</span></div></div></header>
  <section className="project-showcase">{projects.map((p,i)=><article className={i===0?'project-tile featured':'project-tile'} key={p.title}>
    <div className="project-visual" style={{backgroundImage:`linear-gradient(140deg,transparent 20%,#070908 100%),url(${p.image})`}}><span>0{i+1}</span><small>{p.status}</small></div>
    <div className="project-copy"><p>{p.tag}</p><h2>{p.title}</h2><div><span>{p.description}</span><a href={p.link} target="_blank" rel="noreferrer" aria-label={`View ${p.title}`}>+</a></div></div>
  </article>)}</section>
</main></div>}
