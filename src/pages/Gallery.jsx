import React from "react";
import "../styles/Gallery.css";
import galleryImg1 from "../assets/images/gallery/gallery-1.jpg"; 
import galleryImg2 from "../assets/images/gallery/gallery-2.jpg";
import galleryImg3 from "../assets/images/gallery/gallery-3.jpg";
import galleryImg4 from "../assets/images/gallery/gallery-4.jpg";
import galleryImg5 from "../assets/images/gallery/gallery-5.jpg";

const Gallery = () => {
  const images = [galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5];

  return (
    <section id="gallery" className="gallery section">
      <div className="container5">
        {/* Title */}
        <div className="section-title5" >
          <h2>Gallery</h2>
          <p>
            <span className="first">CHECK </span> <span className="description5-title">OUR GALLERY</span>
          </p>
        </div>

        {/* Gallery Flex Container */}
        <div className="gallery-container">
        <div className="gallery-track">
            {/* Duplicating Images for Infinite Scrolling */}
            {[...images, ...images].map((image, index) => (
              <div className="gallery-item" key={index}>
                <img src={image} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
          {/*{galleryImages.map((image, index) => (
            <div className="gallery-item" key={index} >
              <a href={image} className="glightbox">
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </a>
            </div>
          ))}
        </div>*/}
      </div>
    </section>
  );
};
export default Gallery;
