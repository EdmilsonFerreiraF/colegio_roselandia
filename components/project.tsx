type IProps = {
  project: any;
};

const Project = ({ project }: IProps) => {
  return (
    <div className="project-item">
      <img src={project.imageUrl} alt="" />
    </div>
  );
};

export default Project;
