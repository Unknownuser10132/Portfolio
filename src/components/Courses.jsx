import "../assets/styles/courses.css";

const Courses = () => {
    const courseraCourses = [
        {
            name: "Google Cybersecurity Professional Certificate",
            year: "2022",
            description: "An 8-course program providing hands-on experience in cybersecurity, including threat identification, risk management, incident response, and the usage of tools like Python, Linux, and SQL.",
        },
        {
            name: "IBM Malware Analysis and Introduction to Assembly Language",
            year: "2024",
            description: "Focused on dissecting malware to understand its functionality, this course covers assembly language fundamentals and reverse engineering techniques essential for analysing malicious code.",
        },
    ];
    const linkedInCourses = [
        {
            name: "Network Forensics",
            year: "2023",
            description: "Acquired practical skills in analysing network traffic for cyber threat detection and forensic investigations.",
        },
        {
            name: "Operating Systems Forensics",
            year: "2023",
            description: "Learned techniques for examining operating systems to uncover digital evidence, focusing on file systems and memory analysis.",
        },
        {
            name: "Cybersecurity Foundations: Computer Forensics",
            year: "2023",
            description: "Developed foundational skills in evidence collection, preservation, and analysis to support cybersecurity investigations.",
        },
    ];

    return (
        <div className="courses-container">
            {/* Course cards */}
            <div className="course-cards">
                {/* Coursera courses */}
                <div className="course-list coursera-courses">
                    <h3 className="provider">Coursera</h3>
                    {courseraCourses.map((item, idx) => (
                        <div className="course-card" key={idx}>
                            <h4 className="name">{item.name}</h4>
                            <p className="year">{`Completed in ${item.year}`}</p>
                            <p className="description">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* LinkedIn courses */}
                <div className="course-list linked-courses">
                    <h3 className="provider">LinkedIn Learning</h3>
                    {linkedInCourses.map((item, idx) => (
                        <div className="course-card" key={idx}>
                            <h4 className="name">{item.name}</h4>
                            <p className="year">{`Completed in ${item.year}`}</p>
                            <p className="description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Courses;
