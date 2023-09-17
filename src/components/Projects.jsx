
function Projects() {
    // Aquí puedes agregar tus Projects destacados
    const projects = [
        { 
            name: "Secondary School Course Schedule Management Platform",
            type: "Web Application",
            dates: "March 2023 - June 2023",
            description: "I developed a web application to resolve scheduling conflicts among teachers and streamline administrative tasks at a secondary school. Technologies used: Angular for front-end, NestJS for back-end, and MongoDB for the database. Deployed on AWS EC2 ",
            url: "https://demo.gestion-horarios.com"
        },
        { 
            name: "Handball Statistics Page",
            type: "Web Application",
            dates: "June 2023 - Aug 2023",
            description: "I  designed and developed a web application featuring a display of top scorers and a Fair Play table. The application was fueled by data extracted from digital spreadsheets through web scraping techniques. This initiative garnered substantial attention, attracting a consistent monthly traffic of 10,000 visitors.",
            url: "https://goleadores.handball-metropolitano.com/"
        },
    ];

    return (
        <section>
            <p className="medium-title">Projects</p>
            {projects.map(project => (
                <div key={project.name} className=" project-div card">
                    <a  href={project.url}>
                        <p className="project-name">{project.name}</p>
                        <p className="project-type">{project.type}</p>
                        <p className="project-dates">{project.dates}</p>
                        <p className="text"> {project.description}</p>
                    </a>
                </div>
            ))}
        </section>
    );
}



export default Projects;
