import "./style.css";

import React from "react";
import avatar from "../../assets/avatar.jpg";

export class Header extends React.Component {
  render() {
    return (
      <header className={"header" + (this.props.isScrolled ? " scrolled" : "")}>
        <div
          className={
            "header_image" + (this.props.isScrolled ? " scrolled" : "")
          }
        >
          <img
            src={avatar}
            alt=""
            className={this.props.isScrolled ? "scrolled" : ""}
          />
        </div>
        <div className={"title" + (this.props.isScrolled ? " scrolled" : "")}>
          Costas A. Kokke
        </div>
        <div className="invisible"></div>
      </header>
    );
  }
}
