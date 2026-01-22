import React from 'react';
import Defaultnavbar from './navbar';
import "./resume.css"; // Reuse the cyberpunk theme variables if possible, or we will just use inline styles

const Writeups = () => {
  return (
    <>
      <Defaultnavbar />
      <div className="crt-overlay"></div>
      <div style={{
          height: '90vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0a0a05',
          fontFamily: "'Space Grotesk', monospace",
          color: '#ffffff'
      }}>
          <h1 className="glow-text" style={{ 
              fontSize: '4rem', 
              color: '#f9f906', 
              textTransform: 'uppercase', 
              letterSpacing: '0.2rem',
              marginBottom: '1rem' 
          }}>
              Coming Soon
          </h1>
          <p style={{ 
              color: '#6a6a2f', 
              fontFamily: 'monospace',
              fontSize: '1.2rem'
          }}>
              {/* SYSTEM_UPDATE_IN_PROGRESS... */}
              {'// SYSTEM_UPDATE_IN_PROGRESS...'}
          </p>
      </div>
    </>
  );
}

export default Writeups;
