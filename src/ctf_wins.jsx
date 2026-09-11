import EditorialHero from './EditorialHero';
import InnerFooter from './InnerFooter';
import React from 'react'; import InnerNav from './InnerNav'; import './site.css'; import './inner-pages.css';
const awards=[
  ['01','WINNER','Exploit-X International CTF','KPR Institute / EC-Council','GLOBAL'],
  ['02','WINNER','L3m0nCTF 2025','Amrita Vishwa Vidyapeetham, Coimbatore','NATIONAL'],
  ['03','RUNNER-UP','ACNCTF','Amrita Vishwa Vidyapeetham, Chennai','NATIONAL'],
  ['04','2X 2ND RUNNER-UP','HackQuest','JMC / CyberHeals','NATIONAL'],
  ['05','2ND RUNNER-UP','KICTF','Kumaraguru Institute of Engineering and Technology','STATE']
];
export default function CtfWins(){return <div className="page-wrap awards-page"><a className="skip-link" href="#main-content">Skip to content</a><InnerNav/><main id="main-content" tabIndex={-1} className="page-main">
  <EditorialHero number="03" label="CAPTURE THE FLAG / COMPETITION RECORD" title="Under pressure" accent="on the podium" motif="award" description="Curiosity meets the clock. A record of collaborative problem-solving across web security, reverse engineering, cryptography, and beyond."><span><b>06</b> podium finishes</span><span><b>05</b> competitions</span></EditorialHero>
  <section className="podium"><article><span>WINS</span><b>02</b><small>FIRST PLACE</small></article><article className="podium-core"><span>PODIUMS</span><b>06</b><small>ACROSS 5 EVENTS</small></article><article><span>FOCUS</span><b>5X</b><small>WEB / PWN / REV / OSINT / CRYPTO</small></article></section>
  <div className="section-heading"><h2>The competition record</h2><span>TEAMWORK. CURIOSITY. EXECUTION.</span></div><section className="award-board"><div className="board-head"><span>NO.</span><span>RESULT / EVENT</span><span>HOST</span><span>LEVEL</span></div>{awards.map(([num,rank,event,host,level])=><article key={event}><b>{num}</b><div><span>{rank}</span><h2>{event}</h2></div><p>{host}</p><small>{level}</small></article>)}</section>
</main><InnerFooter/></div>}
