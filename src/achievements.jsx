import React,{useState} from 'react';
import Defaultnavbar from './navbar';
import './site.css';
import github from './cert/ai.jpg'; import api from './cert/apihacking.jpg'; import appsec from './cert/CAP.jpg'; import soc from './cert/soc101.jpg'; import web from './cert/webhack.jpg'; import external from './cert/externalpentest.jpg'; import linux from './cert/prevesc.jpg'; import fullhouse from './cert/FullHouse.jpg';

const credentials=[
  [github,'GitHub Advanced Security','Application security','ADVANCED'],[api,'API Security Certified Professional','APIsec University','PROFESSIONAL'],
  [appsec,'Certified AppSec Practitioner','The SecOps Group','PRACTITIONER'],[soc,'SOC 101','TCM Security','DEFENSIVE'],
  [web,'Practical Web Hacking','TCM Security','OFFENSIVE'],[external,'External Pentest Playbook','TCM Security','OFFENSIVE'],
  [linux,'Linux Privilege Escalation','TCM Security','SYSTEMS'],[fullhouse,'FullHouse Pro Lab','Hack The Box','PRO LAB']
];

export default function Achievements(){const [active,setActive]=useState(null);return <div className="page-wrap credentials-page"><Defaultnavbar/><main className="page-main">
  <header className="page-head split-head"><div><span className="kicker">02 / VERIFIED CAPABILITY</span><h1>Proof over<br/><em>promises.</em></h1></div><div className="head-aside"><p>Hands-on credentials spanning application security, offensive operations, incident response, and advanced labs.</p><div className="credential-count"><b>08</b><span>featured<br/>credentials</span></div></div></header>
  <section className="credential-wall">{credentials.map(([img,title,issuer,level],i)=><button className="credential-tile" key={title} onClick={()=>setActive({img,title,issuer,level})}>
    <div className="credential-img"><img src={img} alt=""/><span>0{i+1}</span></div><div><small>{level}</small><h2>{title}</h2><p>{issuer}</p><i>VIEW CREDENTIAL +</i></div>
  </button>)}</section>
  {active&&<div className="credential-modal" role="dialog" aria-modal="true" aria-label={active.title} onClick={()=>setActive(null)}><div onClick={e=>e.stopPropagation()}><button onClick={()=>setActive(null)} aria-label="Close">CLOSE X</button><img src={active.img} alt={active.title}/><p>{active.level} / {active.issuer}</p><h2>{active.title}</h2></div></div>}
</main></div>}
