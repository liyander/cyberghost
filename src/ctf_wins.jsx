import React from 'react';
import Defaultnavbar from './navbar';
import './site.css';

const awards=[
  ['Winner','Exploit-X International CTF','KPR Institute · EC-Council'],
  ['Winner','L3m0nCTF 2025','Amrita Vishwa Vidyapeetham, Coimbatore'],
  ['Runner-up','ACNCTF','Amrita Vishwa Vidyapeetham, Chennai'],
  ['2× 2nd runner-up','HackQuest','JMC · CyberHeals'],
  ['2nd runner-up','KICTF','Kumaraguru Institute of Engineering and Technology']
];

export default function CtfWins(){
 return <div className="page-wrap"><Defaultnavbar/><main className="page-main">
   <header className="page-head"><span className="kicker">Capture the flag / competitive security</span><h1>Pressure tested.<br/>Podium proven.</h1><p>CTFs sharpen the same habits that matter in research: disciplined enumeration, creative attack paths, calm execution, and effective teamwork.</p></header>
   <section className="award-list">{awards.map(([rank,event,host],i)=><article className="award" key={event}><span>0{i+1} / {rank}</span><strong>{event}</strong><p>{host}</p></article>)}</section>
 </main></div>
}
