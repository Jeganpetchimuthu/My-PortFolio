import React, { useEffect, useState } from "react";
import "../Style/Home.css";

function Home() {
  const data = [
    "FrontEnd Developer",
    "BackEnd Developer",
    "FullStack Developer",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const word = data[currentWordIndex];
      if (currentCharIndex < word.length) {
        setTypedText((prevTypedText) => prevTypedText + word[currentCharIndex]);
        setCurrentCharIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId); // Clear interval when word is typed
        setTimeout(() => {
          // Pause before resetting for better visibility
          setCurrentCharIndex(0);
          setTypedText("");
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % data.length); // Loop back to the beginning if reached the end
        }, 1000); // Adjust the delay before resetting (milliseconds)
      }
    }, 100);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [currentWordIndex, currentCharIndex, data]);

  const handleLinkClick = () => {
    window.open(
      "https://drive.google.com/file/d/1aeFoIVySPuAJQO4dKBCaIw2qTyWep8RI/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div className="HomeComponents">
      <div className="HomeProfile">
        <h2 className="Home-h">Hey! There</h2>
      </div>

      <h2 className="myProfile">This is Jegan P</h2>
      <h2 className="Iam">I am {typedText}</h2>
      <img
        className="FirstHomeImage"
        src="https://t4.ftcdn.net/jpg/03/13/54/57/360_F_313545701_4pSbBZzBgdXqB0H4QrujyymPeUkLEa29.jpg"
      ></img>
      <h3 className="Home-About-Sentance">
        I'm a Full Stack Web Developer(MERN), adept in building highly
        responsive, and quality web applications. My skill set and dedication to
        continuous improvement make me a valuable asset in creating innovative
        and efficient web applications.
      </h3>
      <h3 className="HomeResume" onClick={handleLinkClick}>
        My Resume
      </h3>
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

export default Home;
