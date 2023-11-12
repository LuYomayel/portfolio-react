
function WorkExperience() {
    // Aquí puedes agregar tus proyectos destacados
    const projects = [
        { 
            company: "Dolibarr ERP & CRM System for Warehouse Management",
            role: "Full Stack Developer",
            dates: "Aug 2023 - Present",
            description: "Configured and customized Dolibarr ERP & CRM for inventory, order, and logistics management. Handled installation, configuration, and code modification for client-specific needs. Implemented the system on a dedicated server for optimal warehouse management." 
        },
        { 
            company: "Join Solutions",
            role: "Full Stack Web Developer",
            dates: "Jan 2022 - Jun 2023",
            description: "Led and successfully delivered major web application projects using Angular, Nest.js, and SQL Server, enhancing client satisfaction and project delivery efficiency. Developed and secured RESTful APIs with Express.js, improving security and performance. Managed custom project development from client documentation, securing additional contracts. Facilitated client communications and provided regular progress updates. Implemented Agile Scrum methodologies to optimize project timelines and productivity." 
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
