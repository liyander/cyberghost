import React from "react";
import "./cyber-theme.css"; 
import Defaultnavbar from "./navbar";

const ctfData = [
  {
    id: 1,
    title: "EXPLOIT-X CTF",
    rank: "WINNER",
    score: "100%",
    xp: "999,900 XP",
    hostedBy: "KPR and EC-Council",
    desc: "KPR Institute of Engineering and Technology, in collaboration with EC-Council, Hackup Technology, Sparkout Tech, IEEE Computer Society, and IEEE KPRIET Student Branch, presents EXPLOIT-X KPR CTF, a premier cybersecurity challenge for enthusiasts worldwide.",
    icon: "trophy"
  },
  {
    id: 2,
    title: "L3m0n CTF 2025",
    rank: "WINNER",
    score: "98%",
    xp: "950,000 XP",
    hostedBy: "Amrita Vishwa Vidyapeetham Coimbatore",
    desc: "L3m0n CTF 2025, organized by the TIFAC-CORE in Cyber Security, Amrita Vishwa Vidyapeetham, Coimbatore started on 20th December 2025... The CTF was an offline event with around 200 participants from various different colleges across India!",
    icon: "crown"
  },
  {
    id: 3,
    title: "ACNCTF",
    rank: "RUNNER UP",
    score: "85%",
    xp: "820,500 XP",
    hostedBy: "Amrita Vishwa Vidyapeetham Chennai",
    desc: "Amrita CyberNation is an annual event designed to advance cyber awareness, education, and collaboration across students, professionals, and the wider community. With a mission to bridge the gap between academic knowledge and industry practices in cybersecurity",
    icon: "star"
  },
  {
    id: 4,
    title: "HackQuest",
    rank: "2ND RUNNER UP",
    score: "75%",
    xp: "740,000 XP",
    hostedBy: "JMC and CyberHeals",
    desc: "A National-Level CTF Hackathon focused on Web Hacking",
    icon: "shield"
  }
];

const CtfWins = () => {
  return (
    <>
      <Defaultnavbar />
      <div className="cyber-wrapper" style={{ paddingTop: "80px" }}>
        {/* CRT Scanline Overlay */}
        <div className="crt-overlay"></div>

        <div className="cyber-main">
          
          {/* Top Status Pill */}
          <div className="cyber-status-container">
            <div className="cyber-status-pill">
              Player 1 Ready
            </div>
          </div>

          {/* Main Title */}
          <div className="cyber-title-section">
            <h1 className="cyber-main-title" style={{ textShadow: "0 0 20px rgba(240, 230, 53, 0.3)" }}>
              HIGH SCORES: <span className="text-cyber-gold glow-text">CyberGhost05</span>
            </h1>
          </div>

          {/* Top Score Pills */}
          <div className="score-pill-container">
            <div className="score-pill">
              <h3>Global Rank</h3>
              <div className="value shadow-gold">#01 <span className="text-lg opacity-50">/ 1,500+</span></div>
            </div>
            <div className="score-pill">
              <h3>Total Wins</h3>
              <div className="value text-white">4 <span className="text-cyber-gold">🏆</span></div>
            </div>
            <div className="score-pill">
              <h3>Achievements</h3>
              <div className="value text-white">100% <span className="text-lg opacity-50">COMPLETED</span></div>
            </div>
          </div>

          {/* Split Content Area */}
          <div className="split-layout">
            
            {/* Left: Leaderboard */}
            <div className="leaderboard-section">
              <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                
                SKILL LEADERBOARD
              </h2>

              {ctfData.map((ctf, index) => (
                <div key={ctf.id} className="leaderboard-row">
                  <div className="leaderboard-header text-white">
                    <span>0{index + 1}. {ctf.title}</span>
                    <span className="text-cyber-gold">{ctf.xp}</span>
                  </div>
                  <div className="leaderboard-bar-bg">
                    <div 
                      className="leaderboard-bar-fill"
                      style={{ width: ctf.score, boxShadow: "0 0 10px var(--cyber-gold)" }}
                    ></div>
                  </div>
                  <div className="leaderboard-meta">
                    <span className="uppercase tracking-widest text-[var(--cyber-gold)]">{ctf.rank}</span>
                    <span>TOP TIER</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Power-ups (Details) */}
            <div>
              <div className="section-header">
                <h2 className="section-title">
                  <span className="material-symbols-outlined text-[var(--cyber-primary)]">military_tech</span>
                  CAMPAIGN INTEL
                </h2>
                <span className="text-xs text-cyber-muted font-mono">INV: 4/4</span>
              </div>

              <div className="powerup-grid">
                {ctfData.map((ctf) => (
                  <div key={ctf.id} className="powerup-card">
                    <div>
                        <div className="powerup-header">
                        <div className="powerup-icon">
                            <span className="material-symbols-outlined">{ctf.icon}</span>
                        </div>
                        <div>
                            <div className="powerup-label">Event Host</div>
                            <div className="powerup-host">
                                {ctf.hostedBy}
                            </div>
                        </div>
                        </div>
                        <p className="powerup-desc">
                        {ctf.desc.length > 80 ? ctf.desc.substring(0, 80) + "..." : ctf.desc}
                        </p>
                    </div>
                    {/* Render badge for Winner/Runner up */}
                    <div className="powerup-status">
                             <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>lock_open</span>
                             {ctf.rank} Unlocked
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
          
          <div className="cyber-copyright">
             
          </div>

        </div>
      </div>
    </>
  );
};

export default CtfWins;
