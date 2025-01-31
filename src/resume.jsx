import Resume from "./liyander_new.pdf" ;
const Dresume = () => {
    return ( 
    <>
    <div>
            <h2>My Resume</h2>
            <iframe 
                src={Resume} 
                width="100%" 
                height="600px"
                title="Resume"
            ></iframe>
            <p>
                <a href={Resume} download className="btn btn-primary">
                    Download Resume
                </a>
            </p>
        </div>
    </> 
    );
}
 
export default Dresume;