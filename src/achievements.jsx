import InnerFooter from './InnerFooter';
import React,{useState, useEffect, useRef} from 'react';
import Defaultnavbar from './navbar';
import './site.css'; import './inner-pages.css';
import github from './cert/ai.jpg'; import api from './cert/apihacking.jpg'; import appsec from './cert/CAP.jpg'; import soc from './cert/soc101.jpg'; import web from './cert/webhack.jpg'; import external from './cert/externalpentest.jpg'; import linux from './cert/prevesc.jpg'; import fullhouse from './cert/FullHouse.jpg';

const credentials=[
  [github,'GitHub Advanced Security','Application security','ADVANCED'],[api,'API Security Certified Professional','APIsec University','PROFESSIONAL'],
  [appsec,'Certified AppSec Practitioner','The SecOps Group','PRACTITIONER'],[soc,'SOC 101','TCM Security','DEFENSIVE'],
  [web,'Practical Web Hacking','TCM Security','OFFENSIVE'],[external,'External Pentest Playbook','TCM Security','OFFENSIVE'],
  [linux,'Linux Privilege Escalation','TCM Security','SYSTEMS'],[fullhouse,'FullHouse Pro Lab','Hack The Box','PRO LAB']
];

export default function Achievements(){const [active,setActive]=useState(null);
  const dialogRef = useRef(null);
  useEffect(() => {
    if (!active) return;
    const dialog = dialogRef.current;
    const trigger = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [active]);
  return <div className="page-wrap credentials-page"><a className="skip-link" href="#main-content">Skip to content</a><Defaultnavbar/><main id="main-content" tabIndex={-1} className="page-main">
  <header className="page-head split-head"><div><span className="kicker">02 / VERIFIED CAPABILITY</span><h1>Proof over<br/><em>promises.</em></h1></div><div className="head-aside"><p>Hands-on credentials spanning application security, offensive operations, incident response, and advanced labs.</p><div className="credential-count"><b>08</b><span>featured<br/>credentials</span></div></div></header>
  <div className="collection-toolbar"><span className="collection-count">THE CREDENTIAL COLLECTION</span><span className="collection-count">Select a certificate to view</span></div><section className="credential-wall" aria-label="Professional credentials">{credentials.map(([img,title,issuer,level],i)=><button className="credential-tile" key={title} onClick={()=>setActive({img,title,issuer,level})}>
    <div className="credential-img"><img src={img} alt="" loading="lazy" decoding="async"/><span>0{i+1}</span></div><div><small>{level}</small><h2>{title}</h2><p>{issuer}</p><i>VIEW CREDENTIAL +</i></div>
  </button>)}</section>
  {active&&<dialog ref={dialogRef} className="credential-modal" aria-label={active.title} onCancel={()=>setActive(null)} onClick={e=>{if(e.target === e.currentTarget) setActive(null);}}><div onClick={e=>e.stopPropagation()}><button onClick={()=>setActive(null)} aria-label="Close">CLOSE X</button><img src={active.img} alt={active.title}/><p>{active.level} / {active.issuer}</p><h2>{active.title}</h2></div></dialog>}
</main><InnerFooter/></div>}
