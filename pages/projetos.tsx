import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import ProjectsInside from "@/components/section/inside/projectInside/projects";
import OpenEnrollment from "@/components/section/openEnrollment";
import { baseURL } from "@/constants/baseURL";
import { AppContext } from "@/contexts/appProvider";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Projects = () => {
  const { isLoadingPages, pagesData } = useContext(AppContext) as any;

  const [heroImages, setHeroImages] = useState([]);
  const [projectsInside, setProjectsInside] = useState([]);
  const [openEnrollment, setOpenEnrollment] = useState([]);
  const [footer, setFooter] = useState<any>({});
  const [header, setHeader] = useState<any>({});

  const findPage = (page: "Home" | "Projetos" | "Geral") => {
    const pageData = pagesData.find(
      (pageItem: any) => pageItem.titulo === page
    );
    return pageData;
  };

  const projectsPage = findPage("Projetos");
  const generalPage = findPage("Geral");
  useEffect(() => {
    if (pagesData?.length) {
      setHeroImages(
        projectsPage.blocos[1].item.carrossel.map(
          (item: any) => item.item.imagem
        )
      );
      setProjectsInside(
        projectsPage.blocos[0].item.ensinos.map((item: any) => item.item)
      );
      setOpenEnrollment(pagesData[0].blocos[2].item);
      setFooter(generalPage.blocos[0].item);
      setHeader(generalPage.blocos[1].item);
    }
  }, [pagesData, isLoadingPages, projectsPage?.blocos, generalPage?.blocos]);

  return (
    <main
      className={`projects-page flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="main-container">
        <Header studentGuide={header.guia_do_estudante} />;{" "}
        <div className="main">
          <div className="hero">
            <Image
              width="100"
              height="100"
              src={`${baseURL}/assets/${heroImages}`}
              alt=""
            />
          </div>
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
          <ProjectsInside projects={projectsInside} />
          <OpenEnrollment data={openEnrollment} />
          <Footer
            phonesStart={footer?.rodape_inicio_tel}
            address={footer?.rodape_endereco}
            phonesEnd={footer?.rodape_final_tel}
          />
        </div>
      </div>
    </main>
  );
};

export default Projects;
