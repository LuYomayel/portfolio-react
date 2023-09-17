
function WorkExperience() {
    // Aquí puedes agregar tus proyectos destacados
    const projects = [
        { 
            company: "Stock management system",
            role: "Full Stack Developer",
            dates: "Aug 2023 - actual",
            description: "I am currently engaged in developing an integrated stock and order/shipping management system using the Dolibarr tool. This solution is hosted on Digital Ocean for optimal performance and constant availability, ensuring efficient stock and shipping processes for this company." 
        },
        { 
            company: "Join Solutions",
            role: "Full Stack Developer",
            dates: "Jan 2022 - Jun 2023",
            description: "I crafted web applications from the ground up, combining Angular for dynamic front-ends, Nest.js for robust back-ends, and SQL Server for data management. This effort led to the successful completion of 2 projects, elevating client satisfaction. I also bolstered security across 5 applications by developing RESTful APIs with Express.js and secured 3 additional project contracts by tailoring solutions to client specifications. My dedication to daily client communication fostered strong relationships. " 
        },
    ];

    return (
        <section className="professional-experience ">
            <p className="medium-title">Professional Experience</p>
            {projects.map(project => (
                <div key={project.company} className="professional-div">
                    
                    <p className="company-title"> {project.company}</p>
                    <p className="company-role">{project.role}</p>
                    <p className="company-dates">{project.dates}</p>
                    <p className="text">{project.description}</p>
                </div>
            ))}
        </section>
    );
}



export default WorkExperience;
