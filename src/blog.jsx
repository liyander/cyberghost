import React from 'react'; import Defaultnavbar from './navbar'; import './site.css';
const notes=[
  ['01','VULNERABILITY RESEARCH','From crash to CVE: building a reliable disclosure workflow','Methodology for reproducing, scoping, documenting, and coordinating security findings.'],
  ['02','DEVSECOPS','When the pipeline becomes part of the attack surface','Practical patterns for protecting CI/CD, containers, secrets, and infrastructure as code.'],
  ['03','OFFENSIVE SECURITY','What CTF pressure teaches real-world researchers','Lessons in enumeration, mental models, teamwork, and controlled experimentation.']
];
export default function Writeups(){return <div className="page-wrap notes-page"><Defaultnavbar/><main className="page-main">
  <header className="page-head split-head"><div><span className="kicker">05 / FIELD NOTES</span><h1>Research,<br/><em>deconstructed.</em></h1></div><div className="head-aside"><p>Technical notes translating offensive research into practical defensive insight.</p><div className="publish-status"><span></span> EDITORIAL QUEUE ACTIVE</div></div></header>
  <section className="notes-feature"><span>COMING FIRST</span><h2>Inside an 18-CVE<br/>research journey.</h2><p>A candid field guide to failed hypotheses, reliable reproduction, responsible disclosure, and the patience required to move a finding from idea to coordinated fix.</p><a href="https://www.linkedin.com/in/liyanderrishwanth/recent-activity/all/" target="_blank" rel="noreferrer">FOLLOW RELEASES +</a></section>
  <section className="notes-grid">{notes.map(([num,type,title,desc])=><article key={num}><span>{num} / {type}</span><h3>{title}</h3><p>{desc}</p><small>IN REVIEW</small></article>)}</section>
</main></div>}
