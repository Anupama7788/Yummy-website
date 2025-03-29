import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isDeepDropdownOpen, setDeepDropdownOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const location = useLocation();

    // Toggle Mobile Menu
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    // Close menu on link click
    const handleLinkClick = () => {
        setMobileMenuOpen(false);
        setDropdownOpen(false);
        setDeepDropdownOpen(false);
    };

    // Toggle Main Dropdown
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
        setDeepDropdownOpen(false);
    };

    // Toggle Deep Dropdown
    const toggleDeepDropdown = (event) => {
        event.stopPropagation(); // Prevent closing the main dropdown
        setDeepDropdownOpen(!isDeepDropdownOpen);
    };

    // Scroll Tracking to Highlight NavLinks
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentSection = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    currentSection = section.getAttribute("id");
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="header">
            <div className="container">
                {/* Logo */}
                <div  className="logo">
                    <h1 className="sitename">
                        Yummy<span className="dot">.</span>
                    </h1>
                </div>

                {/* Navigation Menu */}
                <nav className={`navmenu ${isMobileMenuOpen ? "open" : ""}`}>
                    <ul className="nav-links">
                        <li>
                            <NavLink to="/" onClick={handleLinkClick} className={location.pathname === "/" || activeSection === "home" ? "active" : ""}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" onClick={handleLinkClick} className={location.pathname === "/about" || activeSection === "about" ? "active" : ""}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/menu" onClick={handleLinkClick} className={location.pathname === "/menu" || activeSection === "menu" ? "active" : ""}>
                                Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/events" onClick={handleLinkClick} className={location.pathname === "/events" || activeSection === "events" ? "active" : ""}>
                                Events
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/chefs" onClick={handleLinkClick} className={location.pathname === "/chefs" || activeSection === "chefs" ? "active" : ""}>
                                Chefs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/gallery" onClick={handleLinkClick} className={location.pathname === "/gallery" || activeSection === "gallery" ? "active" : ""}>
                                Gallery
                            </NavLink>
                        </li>

                        {/* Dropdown Menu */}
                        <li className="dropdown" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                            <a className="dropdown-toggle" onClick={toggleDropdown}>
                                Dropdown <span className={`arrow ${isDropdownOpen ? "rotate" : ""}`}>&#9662;</span>
                            </a>

                            <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                                <li>
                                    <NavLink to="#" onClick={handleLinkClick}>Dropdown 1</NavLink>
                                </li>

                                {/* Deep Dropdown */}
                                <li className="deep-dropdown-container" onMouseEnter={() => setDeepDropdownOpen(true)} onMouseLeave={() => setDeepDropdownOpen(false)}>
                                    <a className="dropdown-toggle deep-dropdown-btn" onClick={toggleDeepDropdown}>
                                        Deep Dropdown <span className={`arrow ${isDeepDropdownOpen ? "rotate" : ""}`}>&#9662;</span>
                                    </a>
                                    <ul className={`dropdown-menu deep-dropdown ${isDeepDropdownOpen ? "show" : ""}`}>
                                        <li><NavLink to="#" onClick={handleLinkClick}>Deep Dropdown 1</NavLink></li>
                                        <li><NavLink to="#" onClick={handleLinkClick}>Deep Dropdown 2</NavLink></li>
                                        <li><NavLink to="#" onClick={handleLinkClick}>Deep Dropdown 3</NavLink></li>
                                        <li><NavLink to="#" onClick={handleLinkClick}>Deep Dropdown 4</NavLink></li>
                                        <li><NavLink to="#" onClick={handleLinkClick}>Deep Dropdown 5</NavLink></li>
                                    </ul>
                                </li>

                                <li><NavLink to="#" onClick={handleLinkClick}>Dropdown 2</NavLink></li>
                                <li><NavLink to="#" onClick={handleLinkClick}>Dropdown 3</NavLink></li>
                                <li><NavLink to="#" onClick={handleLinkClick}>Dropdown 4</NavLink></li>
                            </ul>
                        </li>

                        <li>
                            <NavLink to="/contact" onClick={handleLinkClick} className={location.pathname === "/contact" || activeSection === "contact" ? "active" : ""}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* Right Section */}
                <div className="nav-right">
                    <NavLink className="btn-getstarted" to="/bookatable">Book a Table</NavLink>

                    {/* Mobile Menu Button */}
                    <button className="mobile-nav-toggle" onClick={toggleMobileMenu}>
                        ☰
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
