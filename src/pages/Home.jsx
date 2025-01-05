import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import "../assets/styles/home.css";

const Home = () => {
    const handleViewResume = () => {
        window.open("/resume.pdf", "_blank");
    };

    return (
        <section id="home" className="home-section">
            {/* Greeting & Name */}
            <h1 className="name">
                Hello! I&apos;m <span className="highlight">Ong Zhao Han</span>
            </h1>

            {/* Title */}
            <h2 className="title">Cybersecurity &amp; Digital Forensics Graduate</h2>

            {/* Divider */}
            <hr className="divider" />

            {/* Description */}
            <p className="description">
                I&apos;m a <strong>Cybersecurity &amp; Digital Forensics</strong> graduate with hands-on experience
                in secure application development, vulnerability detection, and mitigation. Proficient in Python 
                programming and OWASP&minus;compliant security practices, with a strong focus on proactive threat
                detection and strengthening cybersecurity resilience through secure coding practices.
            </p>

            {/* Social links & icons */}
            <div className="social-links-icons">
                <a href="https://github.com/Unknownuser10132" target="_blank" rel="noopener noreferer">
                    <FaGithub />
                    <span className="tooltip">GitHub</span>
                </a>
                <a href="https://linkedin.com/in/ong-zhaoh-han-443b2a2a5" target="_blank" rel="noopener noreferer">
                    <FaLinkedin />
                    <span className="tooltip">LinkedIn</span>
                </a>
                <a href="mailto:ongzhaohan@gmail.com" className="email">
                    <FaEnvelope />
                    <span className="tooltip">Email</span>
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferer" className="view-resume">
                    <FaFileAlt />
                    <span className="tooltip">View Resume</span>
                </a>
            </div>
        </section>
    );
  };
  
  export default Home;
