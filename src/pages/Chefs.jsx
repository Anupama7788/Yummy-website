import React from "react";
import "../styles/Chefs.css";
import chefs1Img from "../assets/images/chefs/chefs-1.jpg";
import chefs2Img from "../assets/images/chefs/chefs-2.jpg";
import chefs3Img from "../assets/images/chefs/chefs-3.jpg";

const chefsData = [
  {
    img: chefs1Img,
    name: "Walter White",
    role: "Master Chef",
    description:"Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate."
  },
  {
    img: chefs2Img,
    name: "Sarah Johnson",
    role: "Patissier",
    description:"Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente."
  },
  {
    img: chefs3Img,
    name: "William Anderson",
    role: "Cook",
    description:"Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi."
  },
];

const Chefs = () => {
  return (
    <section id="chefs" className="chefs section">
      <div className="container2">
        <div className="section3-title" data-aos="fade-up">
          <h5>Chefs</h5>
          <p>
            <span>Our Professional</span> <span className="description-title">Chefs</span>
          </p>
        </div>

        <div className="chefs-container">
          {chefsData.map((chef, index) => (
            <div key={index} className="chef-item" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
              <img src={chef.img} className="chef-img" alt={chef.name} />
              <div className="chef-info">
                <h4>{chef.name}</h4>
                <span>{chef.role}</span>
                <h5>{chef.description}</h5>
                <div className="social">
                  <a href="#"><i className="bi bi-twitter"></i></a>
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chefs;
