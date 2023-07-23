import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Education from "./components/Education";

function App() {
  return (
    <div className="w-full   h-screen bg-[#0a192f] ">
      <Navbar  />
      <Home />
      <About />
      <Education/>
      <Contact />
    </div>
  );
}

export default App;
