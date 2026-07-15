import { Link } from 'react-router-dom';
import Error from './error/404.png';
import Back from './error/back.png';
import './ErrorPage.css';

export default function ErrorPage(){
  return <main className="error-screen">
    <div className="error-noise"></div>
    <div className="error-code" aria-hidden="true">404</div>
    <section className="error-stage">
      <div className="error-art">
        <img className="error-sky" src={Back} alt="Retro sunset landscape"/>
        <img className="error-car" src={Error} alt="DeLorean time machine"/>
      </div>
      <div className="error-copy">
        <span className="error-kicker">TEMPORAL ROUTE FAILURE // 404</span>
        <h1>This page is<br/><em>out of time.</em></h1>
        <p>The route you requested disappeared somewhere between 1985 and the present timeline.</p>
        <div className="error-actions">
          <Link to="/home">Return home</Link>
          <Link to="/projects" className="error-secondary">View projects</Link>
        </div>
      </div>
    </section>
    <div className="error-status"><span>FLUX CAPACITOR: ONLINE</span><span>DESTINATION: /HOME</span></div>
  </main>;
}
