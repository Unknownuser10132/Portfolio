import "../assets/styles/awards.css";

const Awards = () => {
    const data = [
        {
            name: "Edusave Scholarship",
            dates: "2020 | 2019",
            description: "Awarded to students who achieved excellent academic performance and demonstrated good conducts.",
        },
        {
            name: "Edusave Certificate of Academic Achievement",
            dates: "2018 | 2017",
            description: "Awarded to students who achieved good academic performance and demonstrated good conduct.",
        }
    ]

    return (
        <div className="awards-container">
            {/* Awards cards */}
            <div className="award-cards">
                {data.map((item, idx) => (
                    <div className="award-card" key={idx}>
                        <h3 className="name">{item.name}</h3>
                        <p className="dates">{item.dates}</p>
                        <p className="description">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Awards;
