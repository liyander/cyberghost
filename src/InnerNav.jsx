import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const links = [['/projects', 'Projects'], ['/achievements', 'Credentials'], ['/ctf-wins', 'Awards'], ['/resume', 'About'], ['/writeups', 'Journal']];

export default function InnerNav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [pathname]);
  return <header className="studio-nav">
    <NavLink className="studio-brand" to="/home" aria-label="Liyander — home"><span className="studio-monogram" aria-hidden="true">l<span>r.</span></span><span>Liyander Rishwanth<small>Security engineer & researcher</small></span></NavLink>
    <button className="studio-menu" aria-expanded={open} aria-controls="studio-links" onClick={() => setOpen(!open)} onKeyDown={event => { if (event.key === 'Escape') setOpen(false); }}>{open ? 'Close −' : 'Menu +'}</button>
    <nav id="studio-links" className={`studio-links ${open ? 'is-open' : ''}`} aria-label="Main navigation" onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); document.querySelector('.studio-menu')?.focus(); } }}>
      {links.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}
      <a className="studio-contact" href="mailto:liyanderrishwanth18@gmail.com">Let’s talk <span aria-hidden="true">↗</span></a>
    </nav>
  </header>;
}
