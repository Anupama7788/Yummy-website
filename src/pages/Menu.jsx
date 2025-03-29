import React, { useState ,useEffect} from "react";
import "../styles/Menu.css";
import menuItem1Img from "../assets/menu/menu-item-1.png";
import menuItem2Img from "../assets/menu/menu-item-2.png";
import menuItem3Img from "../assets/menu/menu-item-3.png";
import menuItem4Img from "../assets/menu/menu-item-4.png";
import menuItem5Img from "../assets/menu/menu-item-5.png";
import menuItem6Img from "../assets/menu/menu-item-6.png";
import testimonial1Img from "../assets/images/testimonals/testimonials-1.jpg";
import testimonial2Img from "../assets/images/testimonals/testimonials-2.jpg";
import testimonial3Img from "../assets/images/testimonals/testimonials-3.jpg";
import testimonial4Img from "../assets/images/testimonals/testimonials-4.jpg";

const testimonials = [
  { image: testimonial1Img, name: "Saul Goodman", role: "CEO & Founder", text: "Proin iaculis purus consequat sem cure dignissim donec porttitora entum suscipit rhoncus." },
  { image: testimonial2Img, name: "Sara Wilsson", role: "Designer", text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid." },
  { image: testimonial3Img, name: "Jena Karlis", role: "Store Owner", text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam." },
  { image: testimonial4Img, name: "John Larson", role: "Entrepreneur", text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit." }
];

const Menu = () => {
  const [activeTab, setActiveTab] = useState("starters");
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="menu" className="menu section">
      <div className="section-title">
        <h5>OUR MENU</h5>
        <p><span>CHECK OUR</span> <span className="description-title">YUMMY MENU</span></p>
      </div>

      {/* Tabs */}
      <ul className="nav-tabs">
        {["starters", "breakfast", "lunch", "dinner"].map((tab) => (
          <li key={tab} className={`nav-item ${activeTab === tab ? "active" : ""}`}>
            <a className="nav-link" onClick={() => setActiveTab(tab)}>
              <h4>{tab.charAt(0).toUpperCase() + tab.slice(1)}</h4>
            </a>
          </li>
        ))}
      </ul>

      <div className="sub-title">
        <p>Menu</p>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "starters" && <MenuCategory title="Starters" items={starterItems} />}
        {activeTab === "breakfast" && <MenuCategory title="Breakfast" items={starterItems} />}
        {activeTab === "lunch" && <MenuCategory title="Lunch" items={starterItems} />}
        {activeTab === "dinner" && <MenuCategory title="Dinner" items={starterItems} />}
      </div>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="section1-title">
          <h5>TESTIMONIALS</h5>
          <p>WHAT ARE THEY<span>SAYING ABOUT US</span></p>
        </div>

        
        <div className="testimonials-container" >
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`testimonial-item ${index === activeIndex ? "active" : ""}`}>
              <div className="testimonial-text">
                <h4>“ {testimonial.text} ”</h4> 
                <h5>{testimonial.name}</h5>
                <h6>{testimonial.role}</h6>
              </div>
              <img src={testimonial.image} className="testimonial-img" alt={testimonial.name} />
            </div>
          ))}
        </div>
       
        {/* Dot Pagination */}
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${activeIndex === index ? "active" : ""}`} 
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </section>
    </section>
  );
};

// Reusable MenuCategory Component
const MenuCategory = ({ title, items }) => (
  <div className="tab-pane">
    <div className="tab-header text-center">
      <h3>{title}</h3>
    </div>
    <div className="menu-grid">
      {items.map((item, index) => (
        <div key={index} className="menu-item">
          <img src={item.img} className="menu-img" alt={item.name} />
          <h4>{item.name}</h4>
          <p className="ingredients">{item.ingredients}</p>
          <p className="price">${item.price}</p>
        </div>
      ))}
    </div>
  </div>
);

const starterItems = [
  { img: menuItem1Img, name: "Magnam Tiste", ingredients: "Lorem, deren, trataro", price: 5.95 },
  { img: menuItem2Img, name: "Aut Luia", ingredients: "Lorem, deren, trataro", price: 14.95 },
  { img: menuItem3Img, name: "Est Eligendi", ingredients: "Lorem, deren, trataro", price: 8.95 },
  { img: menuItem4Img, name: "Eos Luibusdam", ingredients: "Lorem, deren, trataro", price: 12.95 },
  { img: menuItem5Img, name: "Eos Luibusdam", ingredients: "Lorem, deren, trataro", price: 12.95 },
  { img: menuItem6Img, name: "Laboriosam Direva", ingredients: "Lorem, deren, trataro", price: 9.95 },
];

export default Menu;
