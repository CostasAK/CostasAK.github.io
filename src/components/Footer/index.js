import "./style.css";

import React from "react";
import { SiGithub } from "react-icons/si";

export class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div>
          <span>Made by Costas A. Kokke, MSc.</span>
        </div>
        <a href="https://github.com/CostasAK/costasak.github.io">
          <SiGithub />
          <span>Source</span>
        </a>
      </footer>
    );
  }
}
