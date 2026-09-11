import { Link } from 'react-router-dom';

export default function InnerFooter() {
  return <footer className="inner-footer">
    <div><span className="kicker">LET’S BUILD SOMETHING SECURE</span><h2>Good work starts<br/>with a conversation.</h2><a className="footer-contact" href="mailto:liyanderrishwanth18@gmail.com">Get in touch <span aria-hidden="true">↗</span></a></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Liyander Rishwanth</span><Link to="/projects">Explore projects ↗</Link><a href="#main-content">Back to top ↑</a></div>
  </footer>;
}
