import "./style.css";

import { SiGithub, SiGooglescholar, SiLinkedin } from "react-icons/si";

import React from "react";
import avatar from "../../assets/avatar.jpg";

export class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <div className="card">
          <div className="avatar">
            <img src={avatar} alt="" width="100%" />
          </div>
          <div className="name">Costas A. Kokke</div>
          <div className="bio">
            I'm currently researching adaptive radar technologies and optimised
            resource allocation as a doctoral student at the{" "}
            <a href="https://www.tudelft.nl/en/">
              Delft University of Technology
            </a>{" "}
            in cooperation with the{" "}
            <a href="https://www.tno.nl/en/">
              Netherlands Organisation for applied scientific research
            </a>
            .
          </div>
          <div className="links">
            <a href="https://www.linkedin.com/in/costasak/">
              <SiLinkedin />
              <span>LinkedIn</span>
            </a>
            <a href="https://scholar.google.com/citations?user=z7484-Wfh7gC">
              <SiGooglescholar />
              <span>Google Scholar</span>
            </a>
            <a href="https://github.com/CostasAK">
              <SiGithub />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </main>
    );
  }
}
