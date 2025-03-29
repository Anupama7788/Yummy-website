import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Events from "./pages/Events";
import Chefs from "./pages/Chefs";
import BookaTable from "./pages/BookaTable";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);
  
    return null;
  };

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/events" element={<Events />} />
                <Route path="/chefs" element={<Chefs />} />
                <Route path="/bookatable" element={<BookaTable />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            
            <About />
            <Menu />
            <Events />
            <Chefs />
           <BookaTable />
            <Gallery />
            <Contact />
            <Footer />
        </Router>
    );
};

export default App;

