import "./App.css";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import React from "react";

function App() {
  const [isScrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 50);
    });
  }, []);

  return (
    <div className="App">
      <Header isScrolled={isScrolled} />
      <main className={"main" + (isScrolled ? " scrolled" : "")}>
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
      <Footer />
    </div>
  );
}

export default App;
