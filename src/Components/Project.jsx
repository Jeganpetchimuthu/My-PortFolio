import React from "react";
import "../Style/Projects.css";
import image1 from "../images/order.png";
import image2 from "../images/pizza.png";
import image3 from "../images/pinterest app.png";
function Project() {
  const handleGitOrder = () => {
    window.open(
      "https://github.com/Jeganpetchimuthu/order_management_frontend",
      "_blank"
    );
  };
  const handleGitOrderBack = () => {
    window.open(
      "https://github.com/Jeganpetchimuthu/ordermanagement_backend",
      "_blank"
    );
  };
  const handleOrderDeployed = () => {
    window.open(
      "https://6652b134f3c7b765f5de6034--funny-seahorse-3ab1cf.netlify.app/",
      "_blank"
    );
  };

  const handlePizzaGit = () => {
    window.open("https://github.com/Jeganpetchimuthu/webcode", "_blank");
  };
  const handlePizzaGitBack = () => {
    window.open(
      "https://github.com/Jeganpetchimuthu/pizzaApp_server",
      "_blank"
    );
  };
  const handlePizza = () => {
    window.open("https://charming-frangollo-9908d7.netlify.app/", "_blank");
  };
  const handleLinkPinterestClick = () => {
    window.open(
      "https://github.com/Jeganpetchimuthu/pinterest_client",
      "_blank"
    );
  };
  const handleLinkPinterestClickBack = () => {
    window.open("https://github.com/Jeganpetchimuthu/Pinterest-App", "_blank");
  };
  const handlePinterestDeployed = () => {
    window.open("https://charming-monstera-ca7395.netlify.app/", "_blank");
  };

  return (
    <div className="projects-wraps">
      <div className="Project-ContentPage">
        <h2 className="project-container">Crafted with Code</h2>

        <span className="project-flex">
          <div className="youtubeApp">
            <img className="youtubeimg1" src={image1} />
            <h3 className="youtubetitle">Order Management</h3>
            <h4 className="aboutYoutube">
              Order Management is an application which allows to
              manage,track,stocks of the items available and status of the
              orders.
            </h4>
            <span className="project-react">Reactjs</span>
            <span className="project-material">Material UI</span>
            <span className="project-node">Node</span>
            <br />
            <span className="project-express">Expresjs</span>

            <span className="project-mongodb">MongoDb</span>
            <div className="deployed">
              <img
                className="projectgit"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png"
                onClick={handleGitOrder}
              />
              <img
                className="projectgitback"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png"
                onClick={handleGitOrderBack}
              />
              <img
                className="projectnetlify"
                src="https://cdn.worldvectorlogo.com/logos/netlify.svg"
                onClick={handleOrderDeployed}
              />
            </div>
          </div>

          <div className="pizzaDeliveryApp">
            <h3>Pizza Devivery App</h3>
            <img className="youtubeimg2" src={image2} />
            <h3 className="pinteresttitle">Pizza Delivery App</h3>
            <h4 className="aboutYoutube">
              Easiest way to track your fitness Activity,get your accurate data
              to achieve next level of yours.All the CRUD operations are
              performed.
            </h4>
            <span className="project-react">Reactjs</span>
            <span className="project-material">Material UI</span>
            <span className="project-node">Node</span>
            <br />
            <span className="project-express">Expresjs</span>

            <span className="project-mongodb">MongoDb</span>
            <span className="project-nodemailer">NodeMailer</span>
            <div className="deployed2">
              <img
                className="projectgit"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png"
                onClick={handlePizzaGit}
              />
              <img
                className="projectgitback"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png"
                onClick={handlePizzaGitBack}
              />
              <img
                className="projectnetlify"
                src="https://cdn.worldvectorlogo.com/logos/netlify.svg"
                onClick={handlePizza}
              />
            </div>
          </div>
          <div className="pinterestApp">
            <img className="youtubeimg3" src={image3} />
            <h3 className="pinterestTitle">Pinterest App</h3>
            <h4 className="aboutYoutube">
              Pinterest is a photos service where users can watch, like, share,
              comment and upload their photos.All the CRUD operations are
              performed.
            </h4>
            <span className="project-react">Reactjs</span>
            <span className="project-material">Material UI</span>
            <span className="project-node">Node</span>
            <br />
            <span className="project-express">Expresjs</span>

            <span className="project-mongodb">MongoDb</span>
            <span className="project-nodemailer">Multer</span>
            <div className="deployed3">
              <img
                className="projectgit"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png"
                onClick={handleLinkPinterestClick}
              />
              <img
                className="projectgitback"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png"
                onClick={handleLinkPinterestClickBack}
              />
              <img
                className="projectnetlify"
                src="https://cdn.worldvectorlogo.com/logos/netlify.svg"
                onClick={handlePinterestDeployed}
              />
            </div>
          </div>
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

export default Project;
