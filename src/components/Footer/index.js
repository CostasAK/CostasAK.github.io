import "./style.css";

import { FaGithub } from "react-icons/fa";
import React from "react";

export class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-item">
          <span>Made by Costas A. Kokke, MSc.</span>
        </div>
        <a
          className="footer-item"
          href="https://github.com/CostasAK/costasak.github.io"
        >
          <div className="footer-subitem">
            <FaGithub />
          </div>
          <div className="footer-subitem"> Source</div>
        </a>
      </footer>
    );
  }
}
