import React, { useState } from 'react';
import ProjectDetails from '../components/ProjectDetails';
import "../assets/styles/projects.css";

const Projects = () => {
    const cardData = [
        {
            name: "SecureLens",
            date: "Oct 2023 - Apr 2024",
            description: "SecureLens is a command-line tool designed to automate web application vulnerability detection. It targets common vulnerabilities such as SQL injection and XSS while featuring modular scanning and structured logging for developer convenience. This tool has been tested on real applications, significantly reducing manual testing effort and improving security by identifying and resolving critical issues.",
        },
        {
            name: "EduSecure",
            date: "Oct 2022 - Apr 2023",
            description: "EduSecure is a secure web application tailored for educational institutions. It provides real-time logging, anomaly detection, and secure session management using JWT and Redis with IP/User-Agent binding. EduSecure enhances admin accountability with centralized logging and visual dashboards, and has reduced breach response times through ELK Stack visualizations.",
        },
        {
            name: "Tastefully",
            date: "Oct 2021 - Oct 2022",
            description: "Tastefully is a secure recipe-sharing platform balancing functionality and data protection. It integrates Google reCAPTCHA to prevent bot-related spam and employs role-based access control (RBAC) to define user permissions. Malware-free uploads are ensured by VirusTotal API integration, successfully blocking automated bots and enhancing user trust.",
        },
    ];
    const [selectedProject, setSelectedProject] = useState(null);

    // Dynamically render detailed project
    const handleCardClick = (name) => {
        setSelectedProject(name.toLowerCase());
    };

    // Handle modal close
    const handleCloseModal = () => {
        setSelectedProject(null);
    }

    return (
        <section id="projects" className="projects-section">
            {/* Heading */}
            <h1 className="heading">Projects</h1>

            {/* Projects */}
            <div className="projects-container">
                {/* Projects Cards */}
                <div className="project-cards">
                    {cardData.map((item, idx) => (
                        <div className="project-card" key={idx} onClick={() => handleCardClick(item.name)}>
                            <h3 className="name">{item.name}</h3>
                            <p className="date">{item.date}</p>
                            <p className="description">{item.description}</p>
                            <p className="read-more-prompt"><i>Click to read more!</i></p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                        <ProjectDetails name={selectedProject} handleCloseModal={handleCloseModal} />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
