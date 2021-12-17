import "./App.css";

import { FaGithub } from "react-icons/fa";
import React from "react";
import avatar from "./avatar.jpg";
import logo from "./logo.svg";

function App() {
  const [scroll, setScroll] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <div className="App">
      <header className={"header" + (scroll ? " scrolled" : "")}>
        <div className={"header_image" + (scroll ? " scrolled" : "")}>
          <img src={avatar} alt="" />
        </div>
        <div className="title">Costas A. Kokke</div>
      </header>
      <main className={"main" + (scroll ? " scrolled" : "")}>
        <h1>Publications</h1>
        <p>Stuff</p>
        <h1>Web Apps</h1>
        <h2>FFXIV Timers</h2>
        <p>
          Reset Timers and other Countdowns for Final Fantasy XIV, in your local
          time with countdowns.
        </p>
        <h1>Experience</h1>
        <p>Stuff</p>
        <h1>Education</h1>
        <p>Stuff</p>
      </main>
      <footer className="footer">
        <div>
          <img
            alt="GitHub last commit (branch)"
            src="https://img.shields.io/github/last-commit/costasak/costasak.github.io/main"
          />
        </div>
        <a href="https://github.com/CostasAK/costasak.github.io">
          <div>
            <FaGithub />
            <span> Source</span>
          </div>
        </a>
        <div>
          <span>Made by Costas A. Kokke, MSc.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
