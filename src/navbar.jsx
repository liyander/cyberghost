import { useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './site.css';

const links = [
  ['/home','00','Home'], ['/projects','01','Projects'], ['/achievements','02','Credentials'],
  ['/ctf-wins','03','Awards'], ['/resume','04','Resume'], ['/writeups','05','Research']
];

export default function Defaultnavbar(){
  const [open,setOpen]=useState(false);
  const menuRef = useRef(null);
  const location=useLocation();
  const isHome=location.pathname==='/home';

  return <header className={`site-nav ${isHome?'home-site-nav':''}`}>
    <NavLink className="brand" to="/home"><span className="brand-mark">CG</span><span><b>LIYANDER</b><small>SECURITY RESEARCH</small></span></NavLink>
    <button ref={menuRef} className="menu-button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="home-navigation" onClick={()=>setOpen(!open)} onKeyDown={event => { if (event.key === 'Escape') setOpen(false); }}><i></i><i></i></button>
    <nav id="home-navigation" aria-label="Main navigation" className={open?'nav-links open':'nav-links'} onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); menuRef.current?.focus(); } }}>{links.map(([to,index,label])=><NavLink key={to} to={to} onClick={()=>setOpen(false)} className={({isActive})=>isActive?'active':''}><small>{index}</small>{label}</NavLink>)}</nav>
    <a className="nav-cta" href="mailto:liyanderrishwanth18@gmail.com"><span></span> Available for work</a>
  </header>;
}
