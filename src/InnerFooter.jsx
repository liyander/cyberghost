import { Link } from 'react-router-dom';

export default function InnerFooter() {
  return <footer className="inner-footer">
    <div className="footer-topline"><span>HAVE A CHALLENGE IN MIND?</span><span>SECURITY / ENGINEERING / RESEARCH</span></div>
    <a className="footer-invitation" href="mailto:liyanderrishwanth18@gmail.com">Let’s make<br/><em>an impact.</em><span aria-hidden="true">↗</span></a>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Liyander Rishwanth</span><div><a href="https://github.com/liyander" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/liyanderrishwanth/" target="_blank" rel="noreferrer">LinkedIn ↗</a><Link to="/home">Home ↗</Link></div><a href="#main-content">Back to top ↑</a></div>
  </footer>;
}
