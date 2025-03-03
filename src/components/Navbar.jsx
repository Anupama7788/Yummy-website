import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <button className="nav-button">
        <img src="https://th.bing.com/th/id/OIP.mvHBtP6ALfgma0U2EFKnGgHaHk?w=840&h=859&rs=1&pid=ImgDetMain" alt="Payments" className="nav-icon" />
        <span>Payments</span>
      </button>
      <button className="nav-button">
        <img src="https://cdn-icons-png.flaticon.com/512/8969/8969885.png" alt="Machine Learning " className="nav-icon"/>
        <span>Machine Learning</span></button>
      <button className="nav-button"> <img src="https://th.bing.com/th/id/OIP.4bbkqlttLgR0YIii0U29AgAAAA?rs=1&pid=ImgDetMain" alt="Databases" className="nav-icon"/>
      <span>Databases</span></button>
      <button className="nav-button">
      <img src="https://static.vecteezy.com/system/resources/previews/003/329/500/non_2x/line-icon-for-cube-vector.jpg" alt="Infrastructure " className="nav-icon"/>
      <span>Infrastructure</span></button>
      <button className="nav-button">
      <img src="https://th.bing.com/th/id/OIP.QY31P0U_BbiD84ZXa1TzFgAAAA?rs=1&pid=ImgDetMain" alt="Company Tools " className="nav-icon"/>
      <span>Company Tools</span></button>
      <button className="nav-button"> <img src="https://i.pinimg.com/474x/70/dd/61/70dd612c65034b88ebf474a52ccc70c4.jpg?nii=t" alt="By Stripes " className="nav-icon"/>
      <span>By Stripes</span></button>
    </nav>
  );
};

export default Navbar;

