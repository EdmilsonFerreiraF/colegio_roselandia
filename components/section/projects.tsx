import Project from "../project";

const Projects = () => {
  const projects = [
    {
      imageUrl: "project-1.jpg",
    },
    {
      imageUrl: "project-2.jpg",
    },
    {
      imageUrl: "project-3.jpg",
    },
    {
      imageUrl: "project-4.jpg",
    },
    {
      imageUrl: "project-5.jpg",
    },
    {
      imageUrl: "project-6.jpg",
    },
    {
      imageUrl: "project-7.jpg",
    },
    {
      imageUrl: "project-8.jpg",
    },
    {
      imageUrl: "project-9.jpg",
    },
  ];

  return (
    <div className="projects">
      <div className="title-subtitle">
        <div className="title">
          <h3>Projetos</h3>
        </div>
        <div className="subtitle">
          <p>
            Visamos prevalecer atributos emocionais, protagonistas e
            empreendedores.
          </p>
        </div>
      </div>
      <div className="project-list">
        {projects.map((project: any) => (
          <Project key={project.imageUrl} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
