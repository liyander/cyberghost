import {Link} from 'react-router-dom';
import Error from './error/404.png';
import Back from './error/back.png';
import './ErrorPage.css';

export default function ErrorPage(){return <main className="error-screen">
  <div className="error-lines"></div><div className="error-ghost">404</div>
  <section className="error-stage">
    <div className="error-art">
      <Link className="error-home-link" to="/home"><span>BACK</span><b>RETURN TO HOME</b></Link>
      <div className="error-art-media"><img className="error-back" src={Back} alt="Retro time travel landscape"/><img className="error-machine" src={Error} alt="Time machine"/></div>
    </div>
    <div className="error-copy"><span>TEMPORAL ROUTE FAILURE / 404</span><h1>Lost in the<br/><em>wrong timeline.</em></h1><p>This route vanished somewhere between the request and the destination. Recalibrate the flux capacitor and try a known coordinate.</p><div><Link to="/projects">VIEW PROJECTS</Link></div></div>
  </section>
  <footer><span>FLUX CAPACITOR: ONLINE</span><span>DESTINATION LOCK: /HOME</span></footer>
</main>}
