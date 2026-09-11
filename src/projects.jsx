import EditorialHero from './EditorialHero';
import InnerFooter from './InnerFooter';
import React, { useState } from 'react';
import InnerNav from './InnerNav';
import './site.css'; import './inner-pages.css';
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

export default function Projects(){const [filter, setFilter] = useState('All projects'); const visible = projects.filter(p => filter === 'All projects' || (filter === 'Open source' ? p.status === 'OPEN SOURCE' : ['ACTIVE LAB', '500 USERS'].includes(p.status))); return <div className="page-wrap projects-page"><a className="skip-link" href="#main-content">Skip to content</a><InnerNav/><main id="main-content" tabIndex={-1} className="page-main">
  <EditorialHero number="01" label="SELECTED WORK / SECURITY ENGINEERING" title="Ideas into" accent="infrastructure" description="Tools, platforms, and experiments built at the intersection of security and software. Designed to solve problems beyond the lab."><span><b>07</b> selected systems</span><span><b>100+</b> training labs</span><span><b>500</b> learners</span></EditorialHero>
  <div className="collection-toolbar"><div className="filter-list" aria-label="Filter projects">{['All projects', 'Open source', 'Learning & labs'].map(label => <button key={label} aria-pressed={filter === label} onClick={() => setFilter(label)}>{label}</button>)}</div><span className="collection-count" role="status">{visible.length} systems / selected work</span></div><section className="project-showcase" aria-label="Selected projects">{visible.map((p,i)=><article className={filter === 'All projects' && i===0?'project-tile featured':'project-tile'} key={p.title}>
    <div className={`project-visual visual-${projects.indexOf(p) % 4}`}><div className="project-visual-top"><span>PROJECT / {String(projects.indexOf(p) + 1).padStart(2, '0')}</span><small>{p.status}</small></div><div className="project-screen"><div className="screen-chrome"><i/><i/><i/><span>{p.title.toLowerCase().replaceAll(' ', '-')}</span></div><img src={p.image} alt={`${p.title} project preview`} loading={i === 0 ? 'eager' : 'lazy'} decoding="async"/></div><span className="project-watermark" aria-hidden="true">{String(projects.indexOf(p) + 1).padStart(2, '0')}</span></div>
    <div className="project-copy"><p>{p.tag}</p><h2>{p.title}</h2><div><span>{p.description}</span><a href={p.link} target="_blank" rel="noreferrer" aria-label={`View ${p.title}`}>Explore <span aria-hidden="true">&nearr;</span></a></div></div>
  </article>)}</section>
</main><InnerFooter/></div>}
