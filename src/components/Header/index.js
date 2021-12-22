import "./style.css";

import React from "react";
import avatar from "../../assets/avatar.jpg";

export class Header extends React.Component {
  render() {
    const add_classes = [];

    if (this.props.isScrolled) {
      add_classes.push("scrolled");
    }

    return (
      <header className={["header", ...add_classes].join(" ")}>
        <div className={["header_image", ...add_classes].join(" ")}>
          <img src={avatar} alt="" className={[...add_classes].join(" ")} />
        </div>
        <div className={["title", ...add_classes].join(" ")}>
          Costas A. Kokke
        </div>
        <div className="invisible"></div>
      </header>
    );
  }
}
