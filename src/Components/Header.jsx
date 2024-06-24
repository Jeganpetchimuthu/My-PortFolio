import React from "react";
import "../Style/Header.css";
import { Link } from "react-router-dom";
function Header() {
  const handleGitLinkClick = () => {
    window.open("https://github.com/Jeganpetchimuthu", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open(" https://www.linkedin.com/in/jegan-p-4094ab293", "_blank");
  };

  return (
    <div className="Header-container">
      <div className="Header-container-flex">
        <Link to="/">
          <h2 className="HeaderHome">Home</h2>
        </Link>
        <Link to="/about">
          <h2 className="HeaderAbout">About</h2>
        </Link>
        <Link to={"/skills"}>
          <h2 className="HeaderSkils">Skills</h2>
        </Link>
        <Link to="/projects">
          <h2 className="HeaderProject">Projects</h2>
        </Link>
      </div>
      <div className="Header-components-right">
        <img
          className="HeaderGitImage"
          onClick={handleGitLinkClick}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png"
          alt="headerimg"
        ></img>

        <img
          className="linkedinImage"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwLKWzUwfVh1T6cGhVmdzwCphw3UsQxv_KTCIqZq8TDA&s"
          onClick={handleLinkedInClick}
        />
        <Link to="/contacts">
          <h2 className="HeaderContact">Contact</h2>
        </Link>
      </div>
    </div>
  );
}
export default Header;
