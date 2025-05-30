import React, { useState, useEffect } from "react";
import './home.css'; 

const titles = ["Greyhat Hacker", "FullStack Developer", "Darth Vader", "Cloud Engineer"];
const TypingEffect = () => {
  const [displayed, setDisplayed] = useState("");
  const [titleIdx, setTitleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIdx];
    let timeout;

    if (!deleting && charIdx < currentTitle.length) {
      timeout = setTimeout(() => setCharIdx(charIdx + 1), 80);
    } else if (!deleting && charIdx === currentTitle.length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(charIdx - 1), 40);
    } else if (deleting && charIdx === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setTitleIdx((titleIdx + 1) % titles.length);
      }, 400);
    }

    setDisplayed(currentTitle.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, titleIdx]);

  return (
    <span className="typing">
      {displayed}
      <span className="cursor">|</span>
    </span>
  );
}

export default TypingEffect;