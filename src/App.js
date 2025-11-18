import React, { useEffect } from "react";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  useEffect(() => {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect width="100" height="100" fill="#0a192f"/>
        <text x="50" y="58" font-size="52" text-anchor="middle" fill="#f59e0b" font-family="Arial" font-weight="700">I</text>
      </svg>
    `;
    const href = "data:image/svg+xml;utf8," + encodeURIComponent(svg);
    let link = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = href;
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#0a192f]">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
