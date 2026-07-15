import React from 'react';
import Defaultnavbar from './navbar';
import './site.css';

export default function Writeups(){
 return <div className="page-wrap"><Defaultnavbar/><main className="page-main">
   <header className="page-head"><span className="kicker">Field notes / disclosure stories</span><h1>Research,<br/>deconstructed.</h1></header>
   <section className="notes-empty"><h2>Write-ups are being prepared for responsible publication.</h2><div><p>Upcoming notes will cover vulnerability research methodology, secure DevSecOps patterns, CTF lessons, and practical defensive takeaways—after disclosure windows and coordinated fixes are complete.</p><a className="button ghost" href="https://www.linkedin.com/in/liyanderrishwanth/recent-activity/all/" target="_blank" rel="noreferrer">Follow updates on LinkedIn ↗</a></div></section>
 </main></div>
}
