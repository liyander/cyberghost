import { useEffect, useId, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeProvider';
import './navigation.css';

const destinations = [
  ['/home', 'Home'], ['/projects', 'Projects'], ['/achievements', 'Credentials'],
  ['/ctf-wins', 'Awards'], ['/resume', 'About'], ['/writeups', 'Journal'],
];

function ThemeIcon({ dark }) {
  return <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {dark ? <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></> : <path d="M20.5 14A8.7 8.7 0 0 1 10 3.5 8.8 8.8 0 1 0 20.5 14Z"/>}
  </svg>;
}

export default function SiteNav() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navId = useId();

  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const dismiss = event => { if (!headerRef.current?.contains(event.target)) setOpen(false); };
    document.addEventListener('pointerdown', dismiss);
    return () => document.removeEventListener('pointerdown', dismiss);
  }, [open]);
  useEffect(() => {
    const desktop = window.matchMedia?.('(min-width: 1101px)');
    const closeOnDesktop = event => { if (event.matches) setOpen(false); };
    desktop?.addEventListener('change', closeOnDesktop);
    return () => desktop?.removeEventListener('change', closeOnDesktop);
  }, []);

  return <header ref={headerRef} className={`portfolio-nav ${open ? 'menu-is-open' : ''}`} onKeyDown={event => {
    if (event.key === 'Escape' && open) { setOpen(false); menuRef.current?.focus(); }
  }}>
    <NavLink className="portfolio-brand" to="/home" aria-label="Liyander Rishwanth, home" onClick={() => setOpen(false)}>
      <span className="portfolio-monogram" aria-hidden="true">lr<span>.</span></span>
      <span>Liyander Rishwanth<small>SECURITY & ENGINEERING</small></span>
    </NavLink>
    <nav id={navId} className={`portfolio-links ${open ? 'is-open' : ''}`} aria-label="Main navigation">
      {destinations.map(([to, label], index) => <NavLink key={to} to={to} onClick={() => setOpen(false)}><small aria-hidden="true">0{index}</small>{label}<span className="nav-link-arrow" aria-hidden="true">↗</span></NavLink>)}
    </nav>
    <div className="portfolio-controls">
      <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}><ThemeIcon dark={theme === 'dark'}/><span>{theme === 'dark' ? 'Light' : 'Dark'}</span></button>
      <a className="portfolio-contact" href="mailto:liyanderrishwanth18@gmail.com">Let’s talk <span aria-hidden="true">↗</span></a>
      <button ref={menuRef} className="portfolio-menu" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls={navId} onClick={() => setOpen(current => !current)}><span>{open ? 'Close' : 'Menu'}</span><i aria-hidden="true">{open ? '−' : '+'}</i></button>
    </div>
  </header>;
}
