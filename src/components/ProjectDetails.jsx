import { IoMdClose } from 'react-icons/io';
import ImageCarousel from "./ImageCarousel";
import "../assets/styles/ProjectDetails.css";

// Init details for each project (bad practice but ok for this instance)
const allProjectData = {
    tastefully: {
        title: "Tastefully",
        type: "Command-Line Application",
        projectType: "Academic Project",
        date: "Oct 2021 - Oct 2022",
        images: [
            { path: "login.png", alt: "initial login page" },
            { path: "member_profile.png", alt: "member profile page" },
            { path: "signup.png", alt: "initial signup page" },
            { path: "admin_panel.png", alt: "admin panel page to manage admin users" },
        ],
        introDescription: "Tastefully is a secure recipe-sharing platform that combines user-friendly functionality with robust security practices, ensuring data protection and malware-free file uploads.",
        tools: {
            programmingLanguages: ["Python", "HTML", "CSS", "Javascript"],
            libraries: ["Flask", "VirusTotal API", "Google reCAPTCHA"],
            concepts: ["OWASP Guidelines", "Role-Based Access Control", "Secure File Uploads"],
            developmentTools: ["GitHub", "Visual Studio Code"],
        },
        situation: "Users needed a secure platform to share and manage recipes, ensuring data protection and preventing bot-related spam.",
        task: "To design a recipe-sharing platform with robust user authentication, secure file storage, and protection against common vulnerabilities.",
        action: [
            "Developed a user authentication system with strong password policies and integrated Google reCAPTCHA to block bot-based spam.",
            "Implemented role-based access control (RBAC) to define user roles for Admins, Members, and Guests, ensuring appropriate permissions.",
            "Integrated the VirusTotal API to verify the security of uploaded files, ensuring malware-free file sharing.",
            "Addressed vulnerabilities like Broken Access Control and Cryptographic Failures by following OWASP guidelines during development.",
        ],
        result: [
            "Successfully created a secure platform, achieving a 100% success rate in blocking automated bots through reCAPTCHA.",
            "Enhanced user trust by integrating file safety verification, resulting in malware-free file uploads.",
            "Delivered a user-friendly and secure platform that balanced functionality with robust security practices.",
        ]
    },
    edusecure: {
        title: "EduSecure",
        type: "Web Application",
        projectType: "Academic Project",
        date: "Oct 2022 - Apr 2023",
        images: [
            { path: "login.png", alt: "initial login page" },
            { path: "register.png", alt: "initial registration page" },
            { path: "student_profile.png", alt: "student profile page" },
            { path: "user_management_dashboard", alt: "user management dashboard page for admins" },
        ],
        introDescription: "EduSecure is a secure web application designed for educational institutions. It integrates real-time anomaly detection, secure logging, and session management to safeguard sensitive user data.",
        tools: {
            programmingLanguages: ["Python", "Javascript", "HTML", "CSS"],
            libraries: ["ELK Stack", "Django", "React", "JWT", "Redis", "VirusTotal", "Google reCAPTCHA"],
            concepts: ["OWASP Guidelines", "Anomaly Detection", "Secure API Endpoints"],
            developmentTools: ["GitHub", "Visual Studio Code"],
        },
        situation: "Educational institutions needed a secure platform to manage sensitive user data, detect anomalies in real time, and ensure administrative accountability.",
        task: "To design and implement a web application that included robust security features such as logging, anomaly detection, and secure session management.",
        action: [
            "Developed a centralized logging system to track sensitive actions (e.g., failed logins, account changes) and created detailed audit logs for admin accountability.",
            "Integrated the ELK Stack (Elasticsearch, Logstash, Kibana) to enable real-time anomaly detection with dynamic visualizations for faster breach response.",
            "Implemented secure session management using JWT tokens and Redis, incorporating IP/User-Agent binding to prevent session hijacking.",
            "Followed OWASP guidelines to secure APIs and protect against vulnerabilities such as insecure authentication and data breaches.",
        ],
        result: [
            "Reduced anomaly response time by 40% through real-time visualisation of logs in Kibana.",
            "Ensured regulatory compliance and admin transparency by developing comprehensive audit logging.",
            "Significantly improved overall system security, preventing vulnerabilities such as session hijacking and broken authentication.",
        ],
    },
    securelens: {
        title: "SecureLens",
        type: "Command Line Application",
        projectType: "Personal Project",
        date: "Oct 2023 - Apr 2024",
        images: [
            { path: "command_line_output.png", alt: "vulnerability scan command line output" },
            { path: "json_file_output.png", alt: "vulnerability scan json file output" },
            { path: "tool_architecture_diagram", alt: "tool process flow diagram - input to scan to detection to logging" },
        ],
        introDescription: "SecureLens is a Python-based command-line tool designed to simplify web application vulnerability detection. Its modular architecture and structured logging enable developers to identify and remediate critical vulnerabilities efficiently.",
        tools: {
            programmingLanguages: ["Python",],
            libraries: ["requests", "re"],
            concepts: ["OWASP Guidelines", "Vulnerability Scanning", "Structured Logging"],
            developmentTools: ["Visual Studio Code",],
        },
        situation: "Many web applications face vulnerabilities like SQL injection and XSS attacks but existing tools were either too complex or lacked modularity for simple, automated scanning.",
        task: "To create a Python-based command-line tool to automate the detection of common web vulnerabilities and assist developers in remediation.",
        action: [
            "Built a scanner using Python libraries (requests, re) to automate the detection of vulnerabilities like SQL injection and XSS, following OWASP guidelines.",
            "Implemented a structured logging system that categorized vulnerabilities by severity and saved them in JSON and TXT formats for easy developer reference.",
            "Tested SecureLens on EduSecure, successfully identifying and mitigating eight vulnerabilities, including broken access control and insecure deserialization.",
            "Designed the tool to be modular, allowing for future updates to include additional vulnerability checks.",
        ],
        result: [
            "Delivered a lightweight, efficient tool that streamlined vulnerability detection for developers.",
            "Improved EduSecure's security by identifying and resolving critical vulnerabilities, demonstrating the tool's effectiveness in real-world testing.",
            "Achieved an 80% reduction in manual vulnerability testing effort by automating common checks.",
        ],
    },
};


const ProjectDetails = ({ name, handleCloseModal }) => {
    const project = allProjectData[name];
    const images = project.images.map((img) => ({
        ...img,
        path: new URL(`../assets/images/${name}/${img.path}`, import.meta.url).href,
    }));
    const tools = project.tools;

    console.log(`Images = ${images}`);

    return (
        <div className="project-details">
            {/* Close Button */}
            <button className='modal-close' onClick={handleCloseModal}>
                <IoMdClose />
            </button>

            {/* Title & Info */}
            <div className="project-header">
                <h1 className="project-title">{project.title}</h1>
                <p className="project-meta">
                    {project.type} - {project.projectType}: {project.date}
                </p>
            </div>

            {/* Images Carousel */}
            <ImageCarousel images={images} projName={name} />

            {/* Intro Description */}
            <div className="project-intro">
                <h2>Description</h2>
                <p>{project.introDescription}</p>
            </div>

            {/* Tools & Tech */}
            <div className="project-tools">
                <h2>Tools and Technologies</h2>
                <ul>
                    <li><strong className="title">Programming Languages:</strong> {tools.programmingLanguages.join(", ")}</li>
                    <li><strong className="title">Frameworks &amp; Libraries:</strong> {tools.libraries.join(", ")}</li>
                    <li><strong className="title">Concepts:</strong> {tools.concepts.join(", ")}</li>
                    <li><strong className="title">Development Tools:</strong> {tools.developmentTools.join(", ")}</li>
                </ul>
            </div>

            {/* STAR Details */}
            <div className="project-star">
                <h2>Details</h2>
                <div className="star-grid">
                    {/* Situation */}
                    <div className="star-card situation">
                        <h3>Situation</h3>
                        <p>{project.situation}</p>
                    </div>

                    {/* Task */}
                    <div className="star-card task">
                        <h3>Task</h3>
                        <p>{project.task}</p>
                    </div>

                    {/* Action */}
                    <div className="star-card action">
                        <h3>Action</h3>
                        <ul>
                            {project.action.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Result */}
                    <div className="star-card result">
                        <h3>Result</h3>
                        <ul>
                            {project.result.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
