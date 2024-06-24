import React from "react";
import "../Style/Skills.css";
function Skills() {
  return (
    <div className="skillswraps">
      <h1 className="skill_head">
        Skill<span className="s">s</span>
      </h1>
      <h2 className="skills-contents">
        I have a strong skill set encompassing various technologies, and I
        prioritize ongoing learning and development to stay abreast of the
        latest industry trends.
      </h2>
      <div className="Frontend">
        <h2 className="frontend-icon">FrontEnd</h2>
        <span className="htmltag">
          <span>
            <img
              className="htmlimg"
              src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png"
              alt="html"
            ></img>
          </span>
          HTML
        </span>
        <span className="csstag">
          <span>
            <img
              className="cssimg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
              alt="cssimg"
            ></img>
          </span>
          CSS
        </span>
        <span className="jstag">
          <span>
            <img
              className="jsimg"
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt="jsimg"
            ></img>
          </span>
          JavaScript
        </span>
        <br></br>
        <span className="reacttag">
          <span>
            <img
              className="reactimg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              alt="reactimg"
            ></img>
          </span>
          React js
        </span>
        <span className="reduxtag">
          <span>
            <img
              className="reduximg"
              src="https://avatars.githubusercontent.com/u/13142323?v=4"
              alt=""
            ></img>
          </span>
          React-Redux
        </span>
        <span className="boostraptag">
          <span>
            <img
              className="bootstrapimg"
              src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
              alt="bootstrapimg"
            ></img>
          </span>
          Bootstrap
        </span>
        <br />
        <span className="materialtag">
          <span>
            <img
              className="materialui"
              src="https://cdn.worldvectorlogo.com/logos/material-ui-1.svg"
              alt="matrialimg"
            ></img>
          </span>
          Material UI
        </span>
      </div>
      <div className="Backend">
        <h2 className="backend-header">BackEnd</h2>
        <span className="reacttag">
          <span>
            <img
              className="reactimg"
              src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
              alt="reactimg"
            ></img>
          </span>
          Node js
        </span>
        <span className="reduxtag">
          <span>
            <img
              className="reduximg"
              src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
              alt="reduximg"
            ></img>
          </span>
          Express Js
        </span>
        <span className="boostraptag">
          <span>
            <img
              className="bootstrapimg"
              src="https://pngimg.com/d/mysql_PNG8.png"
              alt=""
            ></img>
          </span>
          MySQL
        </span>
        <br />
        <span className="materialtag">
          <span>
            <img
              className="materialui"
              src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png"
              alt="matrialimg"
            ></img>
          </span>
          MongoDb
        </span>
      </div>
      <div className="outher">
        <h2 className="versioncontrol">Others</h2>
        <span className="htmltag">
          <span>
            <img
              className="htmlimg"
              src="https://avatars.githubusercontent.com/u/18133?s=200&v=4"
              alt="html"
            ></img>
          </span>
          Git
        </span>
        <span className="csstag">
          <span>
            <img
              className="cssimg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png"
              alt="cssimg"
            ></img>
          </span>
          GitHub
        </span>
        <span className="jstag">
          <span>
            <img
              className="jsimg"
              src="https://cdn.worldvectorlogo.com/logos/netlify.svg"
              alt="jsimg"
            ></img>
          </span>
          Netlify
        </span>
        <br></br>
        <span className="reacttag">
          <span>
            <img
              className="reactimg"
              src="https://cdn.freebiesupply.com/logos/large/2x/visual-studio-code-logo-png-transparent.png"
              alt="reactimg"
            ></img>
          </span>
          Vs Code
        </span>
        <span className="reduxtag">
          <span>
            <img
              className="reduximg"
              src="https://cdn.worldvectorlogo.com/logos/postman.svg"
              alt="reduximg"
            ></img>
          </span>
          PostMan
        </span>
        <span className="boostraptag">
          <span>
            <img
              className="bootstrapimg"
              src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_477db83f729d63210139ec7cd29c1351/render-render.png"
              alt="bootstrapimg"
            ></img>
          </span>
          Render
        </span>
      </div>
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

export default Skills;
