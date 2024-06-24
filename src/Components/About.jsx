import React from "react";
import "../Style/About.css";
function About() {
  return (
    <div className="About-HeaderContainer">
      <h1 className="AboutME-HeaderContent">
        About <span className="me"> Me</span>
      </h1>
      <img
        className="About-HeaderImage"
        src="https://t4.ftcdn.net/jpg/02/55/73/15/360_F_255731595_eG8ZerN19GVsoXqnqaExufXIiWmfDcih.jpg"
      />

      <h2 className="About-Header_myself">
        I'm JEGAN P, a Fullstack Developer hailing from Sivagangai, Tamil Nadu.
        With a keen eye for detail and a dedication to clean code,I believe in
        the power of versatility. As a Fullstack Developer, I enjoy the
        challenge of working across the entire technology stack, from frontend
        design to backend development. This holistic approach allows me to bring
        cohesive solutions to life, ensuring seamless user experiences from
        start to finish.
      </h2>
      <div className="footerContainer">
        <h2 className="footer-wrap">
          A passionate developer building the future
        </h2>

        <h3 className="footer-copyright">
          © 2023 Jegan P. All rights reserved.
        </h3>
      </div>
    </div>
  );
}

export default About;
