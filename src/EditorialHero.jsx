export default function EditorialHero({ number, label, title, accent, description, children, motif = 'orbit' }) {
  return <header className={`editorial-hero motif-${motif}`}>
    <div className="hero-eyebrow"><span><i aria-hidden="true"/> INDEPENDENT THINKING. PRACTICAL SECURITY.</span><span>INDEX / {number}</span></div>
    <div className="hero-body">
      <div className="hero-title"><p className="kicker">{label}</p><h1>{title}<br/><em>{accent}</em><span className="hero-period">.</span></h1></div>
      <div className="hero-art" aria-hidden="true"><svg viewBox="0 0 320 320" fill="none"><circle cx="160" cy="160" r="125"/><circle cx="160" cy="160" r="92"/><ellipse cx="160" cy="160" rx="48" ry="125" transform="rotate(35 160 160)"/><ellipse cx="160" cy="160" rx="48" ry="125" transform="rotate(-35 160 160)"/><path d="M0 160H320M160 0V320"/><circle className="orbit-point" cx="259" cy="84" r="12"/></svg><span className="art-index">{number}</span><span className="art-caption">CURIOSITY → CAPABILITY</span></div>
    </div>
    <div className="hero-bottom"><p>{description}</p><div className="hero-meta">{children}</div></div>
  </header>;
}
