import Image from "next/image";

type IProps = {
  project: any;
};

const Project = ({ project }: IProps) => {
  return (
    <div className="project-item">
      <Image width="100" height="100" src={project.imageUrl} alt="projeto" />
    </div>
  );
};

export default Project;
