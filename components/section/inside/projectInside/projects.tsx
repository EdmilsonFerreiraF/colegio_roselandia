import { baseURL } from "@/constants/baseURL";
import Image from "next/image";

const ProjectsInside = ({ projects }: any) => {
  return (
    <div className="projects">
      {projects?.map((item: any) => (
        <div key={item.titulo} className="project-school-level">
          <div className="project-title">{item.titulo}</div>
          <div key={item?.titulo} className="project-list">
            {item?.projetos?.map((projeto: any) => (
              <div key={item.titulo} className="project">
                <div className="content-1">
                  <div className="image-1">
                    <Image
                      width="100"
                      height="100"
                      src={`${baseURL}/assets/${projeto.item?.imagem_1}`}
                      alt=""
                    />
                  </div>
                  <div className="content-title"> {projeto.item?.titulo}</div>
                  <div className="text-1 text">
                    {projeto.item?.texto?.slice(0, 356)}
                  </div>
                </div>
                <div className="content-2">
                  <div className="image-2">
                    <Image
                      width="100"
                      height="100"
                      src={`${baseURL}/assets/${projeto.item?.imagem_2}`}
                      alt=""
                    />
                  </div>
                  <div className="text-3 text">
                    {projeto.item?.texto?.slice(
                      356,
                      projeto.item?.texto?.length - 1
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsInside;
