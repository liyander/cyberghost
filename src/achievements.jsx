import React from "react";
import "./certifications.css";
import Defaultnavbar from "./navbar";
import junior from "./cert/jr.jpg";
import webpen from "./cert/webpen.jpg";
import web from "./cert/web.jpg";
import advent from "./cert/advent.jpg";
import ai from "./cert/ai.jpg";
import api from "./cert/apihacking.jpg";
import external from "./cert/externalpentest.jpg";
import prevesc from "./cert/prevesc.jpg";
import osint from "./cert/osint.jpg";
import python201 from "./cert/python201.jpg";
import soc from "./cert/soc101.jpg";
import webhack from "./cert/webhack.jpg";
import linux101 from "./cert/linux101.jpg";
import cap from "./cert/CAP.jpg";
import forensics from "./cert/forensics.jpg";
import hackquest from "./cert/hackquest.jpg";
import ADAPI from "./cert/ADAPI.jpg";
import CNSP from "./cert/CNSP.jpg";
import CTI from "./cert/CTI.jpg";
import ExploitX from "./cert/exploitX.jpg";
import CYAPO from "./cert/CYAPO.jpg";
import Fullhouse from "./cert/FullHouse.jpg";
import express from "./cert/express.jpg";
import mongo from "./cert/mongodb.jpg";
import WebDeveloper from "./cert/Webdeveloper.jpg";
import azure from "./cert/azure.jpg";

// const temp = "https://www.codedex.io/images/sql/sqlbanner.gif"

const certData = [
  { img: python201, title: "Python 101 & 201", desc: "TCM Security", icon: "🐍", src: "https://www.codedex.io/images/python/python-animated.gif",level:"master" },
  { img: CTI, title: "Cyber Threat Intelligence", desc: "CTI Certification From ArcX", icon: "🛡️" ,src:"https://www.codedex.io/images/css/css-course-banner.gif",level:"Beginner" },
  { img: CNSP, title: "Certified Network Security Practitioner", desc: "CNSP From Secops", icon: "🌐",src:"https://www.codedex.io/images/framework-valley-react/banner.gif",level:"Beginner" },
  { img: ExploitX, title: "ExploitX CTF", desc: "International CTF Winner", icon: "💣",src:"https://www.codedex.io/images/intermediate-python/intermediate-python.gif",level:"Hard" },
  { img: CYAPO, title: "Cyber Apocalypse", desc: "HackTheBox CTF Participation", icon: "👾",src:"https://www.codedex.io/images/html-header.png",level:"Insane" },
  { img: junior, title: "Junior Penetration Tester", desc: "Tryhackme", icon: "🧪",src:"https://www.codedex.io/images/javascript/javascript-course-banner.gif",level:"master" },
  { img: webpen, title: "Web Pentesting", desc: "Tryhackme", icon: "🌐" ,src:"https://www.codedex.io/images/html/html-parralax-combined.gif",level:"Beginner"},
  { img: external, title: "External Pentest", desc: "TCM Security", icon: "🔓",src:"https://www.codedex.io/images/sql/seo-bannergif.gif",level:"beginner" },
  { img: advent, title: "Advent of Cyber", desc: "TryHackMe Event", icon: "🎄",src:"https://i.imgur.com/If0k6Qj.gif",level:"master" },
  { img: ai, title: "AI & Prompt Engineering", desc: "TCM Security", icon: "🤖" ,src:"https://www.codedex.io/images/sql/sqlbanner.gif",level:"beginner"},
  { img: api, title: "Practical API Hacking", desc: "TCM Security", icon: "🔌",src:"https://www.codedex.io/images/gen-ai/genaicourseimage.png",level:"beginner" },
  { img: prevesc, title: "Privilege Escalation", desc: "TCM Security", icon: "🧗",src:"https://www.codedex.io/images/numpy/banner.gif",level:"master" },
  { img: osint, title: "OSINT Fundamentals", desc: "TCM Security", icon: "🔍",src:"https://cdn.wallpapersafari.com/26/68/CK7JQZ.jpg",level:"master" },
  { img: soc, title: "SOC 101", desc: "TCM Security", icon: "🚨",src:"https://cdn.wallpapersafari.com/15/68/UEROHP.jpg",level:"master" },
  { img: webhack, title: "Practical Web Hacking", desc: "TCM Security", icon: "🌐",src:"https://cdn.wallpapersafari.com/38/73/zVLwet.jpg",level:"master" },
  { img: linux101, title: "Linux 101", desc: "TCM Security", icon: "🐧",src:"https://cdn.wallpapersafari.com/21/10/n85SPG.png",level:"beginner" },
  { img: cap, title: "Certified APPsec Practitioner", desc: "SecOps", icon: "🚩",src:"https://cdn.wallpapersafari.com/32/69/9bJkWu.jpg",level:"Beginner" },
  { img: forensics, title: "Cyber Forensics", desc: "TCM Security", icon: "🧬",src:"https://cdn.wallpapersafari.com/17/79/mu3Ahd.jpg",level:"master" },
  { img: hackquest, title: "HackQuest", desc: "National CTF 2nd Runner", icon: "🏆",src:"https://cdn.wallpapersafari.com/96/83/YPhQn8.jpg",level:"master" },
  { img: ADAPI, title: "API Penetration Testing", desc: "APISEC university", icon: "📡",src:"https://cdn.wallpapersafari.com//81/98/f8rIAD.png",level:"beginner" },
  { img: web, title: "Web Fundamentals", desc: "Tryhackme", icon: "🌍",src:"https://cdn.wallpapersafari.com/94/71/TKmQ0w.jpg",level:"beginner" },
  { img: Fullhouse, title: "Full House Pro labs", desc: "HackTheBox", icon: "🏠", src: "https://cdn.wallpapersafari.com/5/56/BWVTSR.jpg", level: "Insane" },
  { img: express, title: "Express.js Fundamentals", desc: "Scrimba", icon: "⚡", src: "https://cdn.wallpapersafari.com/1/42/ASzhFV.jpg", level: "Beginner" },
  { img: mongo, title: "MongoDB Basics", desc: "Simplilearn", icon: "📊", src: "https://cdn.wallpapersafari.com//22/69/258kVX.jpeg", level: "Beginner" },
  { img: WebDeveloper, title: "Web Developer Fundamentals", desc: "IBM", icon: "💻", src: "https://cdn.wallpapersafari.com/39/80/ySVsN7.jpg", level: "Beginner" },
  { img: azure, title: "Azure Fundamentals", desc: "Microsoft", icon: "☁️", src: "https://wallpapers-clan.com/wp-content/uploads/2025/05/spiderman-watching-sunset-over-snowing-nyc-desktop-wallpaper-preview.jpg", level: "Beginner" }
];

const openCertificate = (image) => {
  const newTab = window.open();
  newTab.document.write(`<img src="${image}" style="width:100%; height:auto;" />`);
};

const CertificationsPlain = () => {
  return (
    <>
      <Defaultnavbar />
      <div className="certifications">
        <h2 style={{ color: "#fff", textAlign: "center", marginBottom: "2rem" }}>📜 C3rtificati0ns 0wned</h2>
        <div className="cert-grid">
          {certData.map((cert, index) => (
            <div className="cert-card-modern" key={index}>
              <div className="cert-card-img-wrap">
                <img src={cert.src} alt={cert.title} className="cert-card-img" />
              </div>
              <div className="cert-card-body">
                <span className="cert-card-category">CERTIFICATE</span>
                <h3 className="cert-card-title">{cert.icon} {cert.title}</h3>
                <p className="cert-card-desc">{cert.desc}</p>
              </div>
              <div className="cert-card-footer">
                <span className="cert-card-pill">{cert.level}</span>
                <button className="cert-card-btn" onClick={() => openCertificate(cert.img)}>
                  View Certificate →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CertificationsPlain;
