import "./style.scss";

import {
  SiGithub as Github,
  SiKofi as Kofi,
  SiLinkedin as Linkedin,
  SiGooglescholar as Scholar,
} from "react-icons/si";

import avatar from "../../assets/avatar.jpg";

export function Bio(props) {
  return (
    <div className="Bio">
      <div className="avatar">
        <img src={avatar} alt="" width="100%" />
      </div>
      <div className="name">Costas A. Kokke</div>
      <div className="bio">
        I'm currently researching adaptive radar technologies and optimised
        resource allocation as a doctoral student at the{" "}
        <a href="https://www.tudelft.nl/en/">Delft University of Technology</a>{" "}
        in cooperation with the{" "}
        <a href="https://www.tno.nl/en/">
          Netherlands Organisation for applied scientific research
        </a>{" "}
        and{" "}
        <a href="https://english.defensie.nl/topics/netherlands-defence-academy">
          Netherlands Defence Academy
        </a>
        .
      </div>
      <div className="links">
        <a href="https://www.linkedin.com/in/costasak/">
          <Linkedin />
          <span>LinkedIn</span>
        </a>
        <a href="https://scholar.google.com/citations?user=z7484-Wfh7gC">
          <Scholar />
          <span>Scholar</span>
        </a>
        <a href="https://github.com/CostasAK">
          <Github />
          <span>GitHub</span>
        </a>
        <a href="https://ko-fi.com/CostasAK">
          <Kofi />
          <span>Ko-fi</span>
        </a>
      </div>
    </div>
  );
}
