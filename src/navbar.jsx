import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './site.css';

const links = [
  ['/home','00','Home'], ['/projects','01','Projects'], ['/achievements','02','Credentials'],
  ['/ctf-wins','03','Awards'], ['/resume','04','Resume'], ['/writeups','05','Research']
];

export default function Defaultnavbar(){
  const [open,setOpen]=useState(false);
  const location=useLocation();
  const isHome=location.pathname==='/home';

  return <header className={`site-nav ${isHome?'home-site-nav':''}`}>
    <NavLink className="brand" to="/home"><span className="brand-mark">CG</span><span><b>LIYANDER</b><small>SECURITY RESEARCH</small></span></NavLink>
    <button className="menu-button" aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(!open)}><i></i><i></i></button>
    <nav className={open?'nav-links open':'nav-links'}>{links.map(([to,index,label])=><NavLink key={to} to={to} onClick={()=>setOpen(false)} className={({isActive})=>isActive?'active':''}><small>{index}</small>{label}</NavLink>)}</nav>
    <a className="nav-cta" href="mailto:liyanderrishwanth18@gmail.com"><span></span> Available for work</a>
  </header>;
}
