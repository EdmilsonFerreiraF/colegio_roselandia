import { baseURL } from "@/constants/baseURL";
import Image from "next/image";

type IProps = {
  project: any;
};

const Project = ({ project }: IProps) => {
  return (
    <div className="project-item">
      <Image
        width={660}
        height={225}
        src={`${baseURL}/assets/${project.imagem}`}
        alt="projeto"
      />
    </div>
  );
};

export default Project;
