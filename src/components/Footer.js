import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedInIcon />
        <GithubIcon />
      </div>
      <p>&copy; 2024 KarsonLant.com</p>
    </div>
  );
}

export default Footer;
