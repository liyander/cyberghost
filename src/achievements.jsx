import React from 'react';
import Defaultnavbar from './navbar';
import './site.css';
import github from './cert/ai.jpg';
import api from './cert/apihacking.jpg';
import appsec from './cert/CAP.jpg';
import soc from './cert/soc101.jpg';
import web from './cert/webhack.jpg';
import external from './cert/externalpentest.jpg';
import linux from './cert/prevesc.jpg';
import fullhouse from './cert/FullHouse.jpg';

const credentials=[
  [github,'GitHub Advanced Security','Application security'],[api,'API Security Certified Professional','APIsec University'],
  [appsec,'Certified AppSec Practitioner','The SecOps Group'],[soc,'SOC 101','TCM Security'],
  [web,'Practical Web Hacking','TCM Security'],[external,'External Pentest Playbook','TCM Security'],
  [linux,'Linux Privilege Escalation','TCM Security'],[fullhouse,'FullHouse Pro Lab','Hack The Box']
];

export default function Achievements(){
  return <div className="page-wrap"><Defaultnavbar/><main className="page-main">
    <header className="page-head"><span className="kicker">Continuous practice / verified learning</span><h1>Credentials,<br/>not decoration.</h1><p>A focused selection of practical security programs spanning application security, offensive operations, cloud, incident response, and advanced labs.</p></header>
    <section className="credential-grid">{credentials.map(([img,title,issuer])=><article className="credential-card" key={title}><img src={img} alt=""/><h3>{title}</h3><p>{issuer}</p></article>)}</section>
  </main></div>
}
