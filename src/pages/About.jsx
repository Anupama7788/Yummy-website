import React from "react";
import "../styles/About.css";
import aboutImg from "../assets/images/about.jpg";
import about2Img from "../assets/images/about-2.jpg";

const About = () => {
  return (
    <div className="about-page">
      {/* Title */}
      <p>ABOUT US</p>

      
      <h2 className="page-title">
              Learn More <span>About Us</span>
            </h2>
            
      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          {/* Left Image */}
          <div className="about-image">
            <img src={aboutImg} alt="Restaurant Interior" />
            <div className="book-table">
          <p>Book a Table</p>
          <a href="tel:+155895548855" className="phone-number">+1 5589 55488 55</a>
        </div>
          </div>
          {/* Right Content */}
          <div className="about-content">
            
            <div className="about-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="about-list">
              <li>✔ Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li>✔ Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li>✔ Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</li>
            </ul>
            <p className="about-text">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis <br />aute irure dolor in reprehenderit in voluptate velit esse cillum dolore<br /> eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non<br />proident
            </p>
            </div>
            <div className="about-video">
          <img src={about2Img} alt="Delicious Food" className="video-thumbnail" />
          <a 
                href="https://www.youtube.com/watch?v=Y7f98aduVJ8" 
                className="glightbox pulsating-play-btn"
                data-type="youtube"
                data-autoplay="true"
              >
                ▶
              </a>
          
        </div>
          </div>
          
        </div>
    </section>
    <section className="why-choose">
        
        <div className="why-box">
          <h3>Why Choose Yummy</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.</p>
          <a href="#learn-more" className="learn-more-btn">Learn More</a>
        </div>
        
         <div className="info-box1">
          <div className="info-box">
          
            <span>📅</span>
            <h5>Corporis voluptates officia eiusmod</h5>
            <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip.</p>
          </div>
          
          <div className="info-box">
            
            <span>💎</span>
            <h5>Ullamco laboris ladore lore pan</h5>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
          </div>
          
          <div className="info-box">
            
            <span>🍽️</span>
            <h5>Labore consequatur incidid dolore</h5>
            
            <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere.</p>
          </div>
          </div>
        
        
      </section>
      {/* Statistics Section */}
      <section className="stats-section">
        <div className="stat">
          <h2>232</h2>
          <p>Clients</p>
        </div>
        <div className="stat">
          <h2>521</h2>
          <p>Projects</p>
        </div>
        <div className="stat">
          <h2>1453</h2>
          <p>Hours of Support</p>
        </div>
        <div className="stat">
          <h2>32</h2>
          <p>Workers</p>
        </div>
      </section>


    </div>
  );
};

export default About;
