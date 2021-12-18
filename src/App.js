import "./App.css";

import { FaGithub } from "react-icons/fa";
import React from "react";
import avatar from "./avatar.jpg";

// import logo from "./logo.svg";

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
          <img src={avatar} alt="" className={scroll ? "scrolled" : ""} />
        </div>
        <div className={"title" + (scroll ? " scrolled" : "")}>
          Costas A. Kokke
        </div>
        <div className="invisible"></div>
      </header>
      <main className={"main" + (scroll ? " scrolled" : "")}>
        <h1>Publications</h1>
        <h2>Binaural Beamforming Based on Automatic Interferer Selection</h2>
        <h3>Abstract</h3>
        <p>
          Binaural cues are important for sound localization. In addition,
          spatially separated sound sources are more intelligible than when they
          are co-located. Binaural cue preservation in multi-microphone hearing
          assistive devices is therefore important for the user’s listening
          experience and safety. A number of
          linearly-constrained-minimum-variance (LCMV) based methods exist for
          this purpose. These are all limited in the number of sources for which
          they can preserve the binaural cues. We propose a method of
          automatically selecting the most important interfering sources using
          convex optimization. The proposed method is compared, using simulation
          experiments, to existing methods in terms of noise suppression and
          localization errors. It improves the performance of the joint binaural
          LCMV beam-former, by giving it more degrees of freedom for noise
          reduction and allows a larger number of (virtual) sources present in
          the scene.
        </p>
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
        <p>Stuff</p>
        <p>Stuff</p>
        <p>Stuff</p>
        <p>Stuff</p>
        <p>Stuff</p>
        <p>Stuff</p>
        <p>Stuff</p>
        <p>Stuff</p>
        <p>Stuff</p>
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
