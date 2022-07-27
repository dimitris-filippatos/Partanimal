import React from "react";

function Contact() {
  return (
    <div className="contact_container">
      <h1>CONTACT US</h1> 
      <p>Write to us about other festivals you know or your experience in our site </p>
      <div className="contact_form">
        <form action="action_page.php">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label htmlFor="subject">Write us about here</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Your message..."
            rows="15"
            cols="100"
          ></textarea>

          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
