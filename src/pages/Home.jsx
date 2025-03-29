import React, {useState} from "react";
import "../styles/Home.css";
import foodImage from "./../assets/food.png";
import videoIcon from "./../assets/video.png";


const Home = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };
  return (
    
    <section id="home" className="home" >
      <div className="home-content">
        <h1>Enjoy Your Healthy <br /> Delicious Food</h1>
        <h5>We are a team of talented designers making websites with Bootstrap</h5>
        <div className="home-buttons">
          <button className="btn-red">Book a Table</button>
          <button className="btn-outline" onClick={openVideo}>
            <img src={videoIcon} alt=" Watch Video" className="video-icon"/>watch video</button>
        </div>
      </div>
      <div className="home-image">
        <img src={foodImage} alt="Delicious Food" />
      </div>
      {isVideoOpen && (
        <div className="video-popup">
          <div className="video-container">
            <span className="close-btn" onClick={closeVideo}>&times;</span>
            <iframe 
              src="https://www.youtube.com/embed/Y7f98aduVJ8?autoplay=1" 
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
    
    
  );
};

export default Home;

    
