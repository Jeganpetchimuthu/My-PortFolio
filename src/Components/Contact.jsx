import React, { useState } from "react";
import axios from "axios";
import "../Style/Contacts.css";

function Contact() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://portfolio-1-b16d.onrender.com/api/mail",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  return (
    <div className="contactMe">
      <div className="messageContainer">
        <div className="myself">
          <h1>Get in Touch</h1>
          <h4>Email : arunjegan1996@gmail.com</h4>
          <h4 className="Phonenumber">Phone:9751465020 </h4>
          <h4>Sivagangai ,Tamil Nadu</h4>
        </div>
        <form className="FormMgs" onSubmit={handleSubmit}>
          <lable>
            <input
              className="name"
              type="text"
              name="FirstName"
              placeholder="FirstName"
              value={formData.FirstName}
              onChange={handleChange}
            ></input>
          </lable>
          <br></br>
          <br></br>
          <lable>
            <input
              className="lname"
              type="text "
              name="LastName"
              placeholder="LastName"
              value={formData.LastName}
              onChange={handleChange}
            ></input>
          </lable>
          <br></br>
          <br></br>
          <lable>
            <input
              className="email"
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            ></input>
          </lable>
          <br></br>
          <br></br>
          <lable>
            <input
              className="phonenum"
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            ></input>
          </lable>
          <br></br>
          <br></br>
          <lable>
            <input
              className="sms"
              type="text"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></input>
          </lable>
          <br></br>
          <br></br>
          <button className="sendbtn" type="submit">
            Send
          </button>
        </form>
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

export default Contact;
