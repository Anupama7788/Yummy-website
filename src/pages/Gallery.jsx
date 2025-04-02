import React, { useEffect, useState, useRef } from "react";
import "../styles/Gallery.css";
import galleryImg1 from "../assets/images/gallery/gallery-1.jpg";
import galleryImg2 from "../assets/images/gallery/gallery-2.jpg";
import galleryImg3 from "../assets/images/gallery/gallery-3.jpg";
import galleryImg4 from "../assets/images/gallery/gallery-4.jpg";
import galleryImg5 from "../assets/images/gallery/gallery-5.jpg";
import galleryImg6 from "../assets/images/gallery/gallery-6.jpg";
import galleryImg7 from "../assets/images/gallery/gallery-7.jpg";
import galleryImg8 from "../assets/images/gallery/gallery-8.jpg";

const images = [galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5, galleryImg6, galleryImg7, galleryImg8];

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const totalImages = images.length;
  const visibleImages = window.innerWidth > 768 ? 5 : 1; // 5 for web, 1 for mobile

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setIndex((prevIndex) => prevIndex + 1);
    }, 2000); // Move every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index >= totalImages) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 1000); // Instantly reset after animation
    }
  }, [index]);

  return (
    <section id="gallery" className="gallery section">
      <div className="container5">
        <div className="section-title5">
          <h2>Gallery</h2>
          <p>
            <span className="first">CHECK </span> <span className="description5-title">OUR GALLERY</span>
          </p>
        </div>

        <div className="gallery-container">
          <div 
            ref={trackRef}
            className="gallery-track"
            style={{
              transform: `translateX(-${index * (100 / visibleImages)}%)`,
              transition: isTransitioning ? "transform 1s ease-in-out" : "none"
            }}
          >
            {[...images, ...images].map((image, i) => (
              <div className="gallery-item" key={i}>
                <img src={image} alt={`Gallery ${i + 1}`} />
              </div>
            ))}
            {/* Duplicate first image for smooth infinite loop */}
            <div className="gallery-item">
              <img src={images[0]} alt="Gallery Loop" />
            </div>
          </div>
        </div>

        <div className="gallery-dots">
          {images.map((_, dotIndex) => (
            <span key={dotIndex} className={`dot ${dotIndex === index % totalImages ? "active" : ""}`}></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
