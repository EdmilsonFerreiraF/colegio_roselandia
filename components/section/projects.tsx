import Link from "next/link";
import Project from "../project";

const Projects = ({ data }: any) => {
  return (
    <div className="projects">
      <Link href="/projetos">
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
          {data.map((project: any) => (
            <Project key={project.imageUrl} project={project} />
          ))}
        </div>
      </Link>
    </div>
  );
};

export default Projects;
