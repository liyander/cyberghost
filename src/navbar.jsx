import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './site.css';

const Defaultnavbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    ['/', 'Overview'], ['/projects', 'Projects'], ['/achievements', 'Credentials'],
    ['/ctf-wins', 'Awards'], ['/resume', 'Resume'], ['/writeups', 'Notes']
  ];

  return (
    <header className="site-nav">
      <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
        <span className="brand-mark">LR</span><span>Liyander Rishwanth</span>
      </NavLink>
      <button className="menu-button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span></span><span></span>
      </button>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {links.map(([to, label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)} className={({isActive}) => isActive ? 'active' : ''}>{label}</NavLink>)}
      </nav>
      <a className="nav-cta" href="mailto:liyanderrishwanth18@gmail.com">Let’s talk <span>↗</span></a>
    </header>
  );
}

export default Defaultnavbar;
