import React from 'react'; import Defaultnavbar from './navbar'; import './site.css';
const awards=[
  ['01','WINNER','Exploit-X International CTF','KPR Institute / EC-Council','GLOBAL'],
  ['02','WINNER','L3m0nCTF 2025','Amrita Vishwa Vidyapeetham, Coimbatore','NATIONAL'],
  ['03','RUNNER-UP','ACNCTF','Amrita Vishwa Vidyapeetham, Chennai','NATIONAL'],
  ['04','2X 2ND RUNNER-UP','HackQuest','JMC / CyberHeals','NATIONAL'],
  ['05','2ND RUNNER-UP','KICTF','Kumaraguru Institute of Engineering and Technology','STATE']
];
export default function CtfWins(){return <div className="page-wrap awards-page"><Defaultnavbar/><main className="page-main">
  <header className="page-head awards-head"><span className="kicker">03 / COMPETITIVE SECURITY</span><h1>Think fast.<br/><em>Break smart.</em></h1><p>Competitive environments test the same habits that power serious research: disciplined enumeration, creative attack paths, and calm execution.</p></header>
  <section className="podium"><article><span>WINS</span><b>02</b><small>FIRST PLACE</small></article><article className="podium-core"><span>PODIUMS</span><b>06</b><small>ACROSS 5 EVENTS</small></article><article><span>FOCUS</span><b>5X</b><small>WEB / PWN / REV / OSINT / CRYPTO</small></article></section>
  <section className="award-board"><div className="board-head"><span>RANK</span><span>RESULT / EVENT</span><span>HOST</span><span>LEVEL</span></div>{awards.map(([num,rank,event,host,level])=><article key={event}><b>{num}</b><div><span>{rank}</span><h2>{event}</h2></div><p>{host}</p><small>{level}</small></article>)}</section>
</main></div>}
