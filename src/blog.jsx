import EditorialHero from './EditorialHero';
import InnerFooter from './InnerFooter';
import React from 'react'; import InnerNav from './InnerNav'; import './site.css'; import './inner-pages.css';
const notes=[
  ['01','VULNERABILITY RESEARCH','From crash to CVE: building a reliable disclosure workflow','Methodology for reproducing, scoping, documenting, and coordinating security findings.'],
  ['02','DEVSECOPS','When the pipeline becomes part of the attack surface','Practical patterns for protecting CI/CD, containers, secrets, and infrastructure as code.'],
  ['03','OFFENSIVE SECURITY','What CTF pressure teaches real-world researchers','Lessons in enumeration, mental models, teamwork, and controlled experimentation.']
];
export default function Writeups(){return <div className="page-wrap notes-page"><a className="skip-link" href="#main-content">Skip to content</a><InnerNav/><main id="main-content" tabIndex={-1} className="page-main">
  <EditorialHero number="05" label="THE RESEARCH JOURNAL" title="Notes from" accent="the field" motif="journal" description="Questions worth asking. Systems worth understanding. A journal of security research, engineering decisions, and lessons learned along the way."><span className="journal-status">IN THE WORKS</span><span>New writing is on its way.<br/>Follow along for releases.</span></EditorialHero>
  <section className="notes-feature"><div className="feature-cover" aria-hidden="true"><span>THE DISCLOSURE SERIES</span><b>18</b><div>FINDINGS.<br/>LESSONS.<br/>PERSPECTIVE.</div><small>RESEARCH JOURNAL / VOL. 01</small></div><div className="feature-editorial"><span className="kicker">UPCOMING / FEATURE STORY</span><h2>Behind every CVE,<br/><em>there is a story.</em></h2><p>Inside an 18-CVE research journey: failed hypotheses, responsible disclosure, and the patience it takes to turn a finding into a coordinated fix.</p><a href="https://www.linkedin.com/in/liyanderrishwanth/recent-activity/all/" target="_blank" rel="noreferrer">Follow the research <span aria-hidden="true">&nearr;</span></a></div></section>
  <div className="section-heading"><h2>On the writing desk</h2><span>03 / UPCOMING NOTES</span></div>
  <section className="notes-grid">{notes.map(([num,type,title,desc])=><article key={num}><b className="note-number" aria-hidden="true">{num}</b><span>{num} / {type}</span><h3>{title}</h3><p>{desc}</p><small>IN REVIEW</small></article>)}</section>
</main><InnerFooter/></div>}
