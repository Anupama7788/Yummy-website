import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!"); 
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container7">
        {/* Section Title */}
        <div className="section-title7" >
          <h2>CONTACT</h2>
          <p>
            <span>NEED HELP?</span> <span className="description-title7">CONTACT US</span>
          </p>
        </div>

        {/* Google Map & Contact Form */}
        <div className="contact-container7">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.676616484237!2d-74.00594128460807!3d40.71277597933042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a31615b5b1b%3A0x80c55fc6f9e2f40c!2sA108%20Adam%20St%2C%20New%20York%2C%20NY%2010002%2C%20USA!5e0!3m2!1sen!2sin!4v1620912924851!5m2!1sen!2sin"
              frameBorder="0"
              allowFullScreen
              title="Google Maps"
            ></iframe>
          </div>
          </div>

        {/* Contact Info */}
        <div className="contact-info7">
          
          <div className="info-item7" >
            <i className="bi bi-geo-alt"></i>
            <div>
              <h4><img 
      src="https://logodix.com/logo/487682.jpg" 
      alt="Address Icon" 
      className="address-icon" 
    />Location:</h4>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>
          <div className="info-item7" >
            <i className="bi bi-envelope"></i>
            <div>
              <h4><img 
      src="https://i.pinimg.com/736x/29/42/ad/2942ad3a9c3e0a074ff4e94ea289ee31.jpg" 
      alt="Address Icon" 
      className="address-icon" 
    />Email:</h4>
              <p>info@example.com</p>
            </div>
          </div>
          <div className="info-item7" >
            <i className="bi bi-phone"></i>
            <div>
              <h4><img 
      src="https://static.vecteezy.com/system/resources/previews/015/730/539/original/eps10-red-phone-call-or-telephone-abstract-icon-isolated-on-white-background-contact-us-or-hotline-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-and-mobile-app-vector.jpg" 
      alt="Address Icon" 
      className="address-icon" 
    />Call:</h4>
              <p>+1 5589 55488 55</p>
            </div>
          </div>
          <div className="info-item7" >
            <i className="bi bi-clock"></i>
            <div>
              <h4><img 
      src="https://www.citypng.com/public/uploads/preview/png-red-clock-icon-symbol-11639648054cu3vfcp33l.png" 
      alt="Address Icon" 
      className="address-icon" />Opening Hours:</h4>
              <p>Mon-Sat: 11AM - 11PM</p>
            </div>
          </div>
        </div>

        

          <div className="contact-form7" >
            <form onSubmit={handleSubmit}>
              <div className="form-group7">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <div className="second">
              <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        
      </div>
    </section>
  );
};
export default Contact;
