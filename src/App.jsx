import React from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Card from "./components/Card";
import "./styles/index.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="grid-container">
        {/* Wrapper div to place both sections in one grid item */}
        <div className="combined-section">
          <Section
            title="PAYMENTS"
            icon={
              <img
                src="https://th.bing.com/th/id/OIP.mvHBtP6ALfgma0U2EFKnGgHaHk?w=840&h=859&rs=1&pid=ImgDetMain"
                alt="Payments Icon"
                className="section-img"
              />
            }
          >
            <Card icon={<img src="https://static.vecteezy.com/system/resources/previews/000/387/927/original/vector-illustration-of-a-rocket-icon.jpg" alt="Dashboard Icon" className="card-img" />}title="ios-dashboard-ui" description="UI components from Stripe Dashboard iOS app" />
            <Card  icon={<img src="https://th.bing.com/th/id/OIP.76mcMFiN_98RbYUj6HV7JgHaHa?pid=ImgDet&w=474&h=474&rs=1" alt="Stripe Icon" className="card-img" />}title="react-stripe-elements" description="React wrapper for Stripe Elements" />
          </Section>

          <Section
            title="MACHINE LEARNING"
            icon={
              <img
                src="https://cdn-icons-png.flaticon.com/512/8969/8969885.png"
                alt="Machine Learning Icon"
                className="section-img"
              />
            }
          >
            <Card  icon={<img src="https://assets.firestoneip.com/content/dam/fsip/airide/coil-rite-kits/product/firestone-alride-coil-rite-Noise-Vibr-Handl-Large.png" alt="Bonsai Icon" className="card-img" />}title="bonsai" description="Transform tree structures into read-only versions that take up a fraction of the space" />
            <Card  icon={<img src="https://assets.firestoneip.com/content/dam/fsip/airide/coil-rite-kits/product/firestone-alride-coil-rite-Noise-Vibr-Handl-Large.png" alt="Brushfire Icon" className="card-img" />}title="brushfire" description="Distributed decision tree ensemble learning in Scala" />
            <Card  icon={<img src="https://th.bing.com/th/id/OIP.v8kSKwwphno0dFDSncUojQAAAA?rs=1&pid=ImgDetMain" alt="Topmodel Icon" className="card-img" />}title="topmodel" description="Standard evaluations for binary classifiers so you don't have to" />
          </Section>
        </div>
      </div>
    </div>
  );
}

export default App;
