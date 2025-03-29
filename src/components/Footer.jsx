import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          {/* Footer Info */}
          <div className="footer-links">
           
            <h4><img 
      src="https://logodix.com/logo/487682.jpg" 
      alt="Address Icon" 
      className="address-icon" 
    />Address</h4>
            <h5>
              A108 Adam Street<br />New York, NY 535022
            </h5>
            
          </div>

          {/* Useful Links */}
          <div className="footer-links">
            <h4><img 
      src="https://static.vecteezy.com/system/resources/previews/005/747/817/non_2x/decline-icon-symbol-red-call-icon-symbol-for-web-app-logo-vector.jpg" 
      alt="Address Icon" 
      className="address-icon" />Contact</h4>
            <h5>Phone: +1 5589 55488 55<br />Email: info@example.com</h5>
              
          </div>

          {/* Our Services */}
          <div className="footer-links">
            <h4><img 
      src="https://www.citypng.com/public/uploads/preview/png-red-clock-icon-symbol-11639648054cu3vfcp33l.png" 
      alt="Address Icon" 
      className="address-icon" />Opening Hours</h4>
            <h5>Mon-Sat: 11AM-23PM<br />Sunday:Closed</h5>
    
          </div>

          {/* Contact Info */}
          <div className="footer-links">
            <h4>Follow Us</h4>
            {/* Contact Info */}

  <div className="social-icons">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin-in"></i>
    </a>
  </div>


          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; Copyright Yummy All Rights Reserved</p>
        <p>
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>Distributed by<a href="https://themewagon.com/">ThemeWagon</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;






