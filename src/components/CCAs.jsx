import "../assets/styles/ccas.css";

const CCAs = () => {
    const nypCCAs = [
        {
            name: "Infosec CTF",
            date: "June 2022 | Dec 2022",
            description: "Participated in Capture The Flag (CTF) competitions to enhance cybersecurity skills in areas like web security, cryptography, and reverse engineering.",
        },
        {
            name: "Code Overflow Hackathon",
            date: "2021",
            description: "Collaborated with a team to design and develop a project prototype within a tight timeframe.",
        },
        {
            name: "C# Workshop",
            date: "2021",
            description: "Gained hands-on experience in developing applications using C#."
        },
    ];

    const unitySecCCAs = [
        {
            name: "Upper Secondary CCA Committee Member",
            date: "2019 - 2020",
            description: "Helped to organise and facilitate activities for various Boys' Brigade events.",
        },
        {
            name: "BB Character Question Compeition (Silver)",
            date: "2019",
            description: "Awarded Silver for Boys' Brigade's national-level competition where Boys learn about moral principles and values through a Bible quiz based on selected Scripture passages, and apply them in engaging team activities."
        },
    ];

    return (
        <div className="ccas-container">
            {/* Course cards */}
            <div className="cca-cards">
                {/* NYP CCAs */}
                <div className="cca-list nyp-cca">
                    <h3 className="institute">Nanyang Polytechnic</h3>
                    {nypCCAs.map((item, idx) => (
                        <div className="course-card" key={idx}>
                            <h4 className="name">{item.name}</h4>
                            <p className="year">{item.date}</p>
                            <p className="description">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Unity Secondary CCAs */}
                <div className="cca-list unitysec-cca">
                    <h3 className="institute">Unity Secondary School</h3>
                    {unitySecCCAs.map((item, idx) => (
                        <div className="course-card" key={idx}>
                            <h4 className="name">{item.name}</h4>
                            <p className="year">{item.date}</p>
                            <p className="description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CCAs;
