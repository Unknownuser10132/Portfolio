import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight, FaCircle } from "react-icons/fa6";
import Awards from '../components/Awards';
import Courses from '../components/Courses';
import CCAs from '../components/CCAs';
import "../assets/styles/achievements.css";

const Achievements = () => {
    const categories = ["awards", "courses", "ccas"];
    const categoryHeadings = ["Edusave Awards", "Completed Courses", "Co-Curricular Activities"];
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [showArrows, setShowArrows] = useState({ left: false, right: true });

    // Handle checking of arrow visibility
    const shouldShowArrow = (currIndex) => {
        const isFirstCat = currIndex === 0;
        const isLastCat = currIndex === categories.length - 1;

        setShowArrows({ left: !isFirstCat, right: !isLastCat });
    };

    // Handle changing of categories
    const handleNavigation = (direction) => {
        const currIndex = categories.indexOf(activeCategory);

        if (direction === "left" && currIndex > 0) {
            const newIndex = currIndex - 1;
            setActiveCategory(categories[newIndex]);
            shouldShowArrow(newIndex);  // Update visibility
        }
        else if (direction === "right" && currIndex < categories.length - 1) {
            const newIndex = currIndex + 1;
            setActiveCategory(categories[newIndex]);
            shouldShowArrow(newIndex);  // Update visibility
        }
    };

    // Handle bubble click
    const handleBubbleClick = (category) => {
        setActiveCategory(category);
        shouldShowArrow(categories.indexOf(category));
    };

    // Trigger arrow visibility check on initial render & category change
    useEffect(() => {
        shouldShowArrow(categories.indexOf(activeCategory));
    }, [activeCategory]);

    // Dynamically render the appropriate category
    const renderCategory = () => {
        switch (activeCategory) {
            case "awards":
                return <Awards />;
            case "courses":
                return <Courses />;
            case "ccas":
                return <CCAs />;
            default:
                return <Awards />;  // Fallback to awards
        }
    };

    return (
        <section id="achievements" className="achievements-section">
            {/* Heading */}
            <h1 className="heading">Achievements and CCAs</h1>
            
            {/* Category top (include heading & arrows */}
            <div className="category-top">
                {/* Display left arrow */}
                <button
                    className={`arrow left-arrow ${showArrows.left ? "" : "disabled"}`}
                    onClick={() => handleNavigation("left")}
                    disabled={!showArrows.left}
                >
                    <FaArrowLeft />
                </button>
                
                {/* Category Heading */}
                <div>
                    {/* Bubbles for navigating between categories */}
                    <div className="category-bubbles">
                        {categories.map((category, idx) => (
                            <button
                                key={idx}
                                className={`bubble ${category === activeCategory ? "active" : ""}`}
                                onClick={() => handleBubbleClick(category)}
                            >
                                <FaCircle />
                            </button>
                        ))}
                    </div>
                    <h3 className="category-heading">{categoryHeadings[categories.indexOf(activeCategory)]}</h3>
                </div>

                {/* Display right arrow */}
                <button
                    className={`arrow right-arrow ${showArrows.right ? "" : "disabled"}`}
                    onClick={() => handleNavigation("right")}
                    disabled={!showArrows.right}
                >
                    <FaArrowRight />
                </button>
            </div>            

            {/* Render appropriate category */}
            {renderCategory()}
        </section>
    );
};

export default Achievements;
