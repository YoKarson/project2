import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Karson</h2>
        <div className="prompt">
          <p>I Am a Front End Software Developer.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span> HTML, CSS, JavaScript, React</span>
          </li>

          <li className="item">
            <h2> Back-End</h2>
            <span> NodeJS, MySQL</span>
          </li>

          <li className="item">
            <h2> Languages</h2>
            <span> JavaScript, Java, C, C++, </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
