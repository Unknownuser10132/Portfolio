import React, { useState, useEffect } from 'react';
import "../assets/styles/navbar.css";

const NavBar = ({ sections, activeSection, setActiveSection }) => {
    // Capitalise section names (e.g., "about-me" -> "About Me")
    const generateSectionName = (section) => {
        return (section
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
        );
    };

    // Handle clicking a navbar link
    const handleSectionClick = (section) => {
        const target = document.getElementById(section);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            setActiveSection(section);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <ul className="navbar-links">
                    {sections.map((section) => (
                        <li 
                            key={section}
                            className={`navbar-item ${activeSection === section ? "active" : ""}`}
                            onClick={() => handleSectionClick(section)}
                        >
                            {generateSectionName(section)}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
