import "./style.css";

import { FaGithub } from "react-icons/fa";
import React from "react";

export class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        {/* <div>
          <img
            alt="GitHub last commit (branch)"
            src="https://img.shields.io/github/last-commit/costasak/costasak.github.io/main"
          />
        </div> */}
        <div>
          <span>Made by Costas A. Kokke, MSc.</span>
        </div>
        <a href="https://github.com/CostasAK/costasak.github.io">
          <div>
            <FaGithub />
            <span> Source</span>
          </div>
        </a>
      </footer>
    );
  }
}
