
function Projects() {
    // Aquí puedes agregar tus Projects destacados
    const personalProjects = [
        { 
            name: "Secondary School Course Schedule Management Platform",
            type: "Web Application",
            dates: "March 2023 - Present",
            description: "Developed a web application for managing course schedules, utilized by over 500 students. Employed Angular for front-end, NestJS for back-end, and MongoDB for data management. Deployed the application on AWS EC2, achieving high availability and uptime.",
            url: "https://demo.gestion-horarios.com"
        },
        { 
            name: "Handball Statistics Page",
            type: "Web Application",
            dates: "May 2023 - Present",
            description: "Created a web application for displaying handball player statistics and fair play tables. Attracted over 10k monthly visits, becoming a popular resource for handball enthusiasts.",
            url: "https://goleadores.handball-metropolitano.com/"
        },
        { 
            name: "Mobile App for Personal Trainers",
            type: "Mobile Application",
            dates: "[Start Date] - Present",
            description: "Developing a mobile app for personal trainers to send personalized workout routines. Features include progress tracking and integrated chat for trainer-student communication.",
            url: "" // Add URL if available
        },
    ];

    return (
        <section>
            <p className="medium-title">Projects</p>
            {personalProjects.map(project => (
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
