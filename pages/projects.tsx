import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import OpenEnrollment from "@/components/section/openEnrollment";
import { baseURL } from "@/constants/baseURL";
import { AppContext } from "@/contexts/appProvider";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Projects = () => {
  const { isLoadingPages, pagesData } = useContext(AppContext) as any;

  const [schoolAttributes, setSchoolAttributes] = useState([]);
  const [heroImages, setHeroImages] = useState([]);
  const [educationLevel, setEducationLevel] = useState([]);
  const [projectsInside, setProjectsInside] = useState([]);
  const [ourHistory, setOurHistory] = useState([]);
  const [openEnrollment, setOpenEnrollment] = useState([]);
  const [partners, setPartners] = useState([]);

  console.log("pagesData", pagesData);
  useEffect(() => {
    console.log("pagesData", pagesData);
  }, [pagesData]);

  const findPage = (page: "Home" | "projetos") => {
    const pageData = pagesData.find(
      (pageItem: any) => pageItem.titulo === page
    );
    return pageData;
  };

  const homePage = findPage("Home");
  const projectsPage = findPage("projetos");

  console.log("schoolAttributes", schoolAttributes);
  useEffect(() => {
    console.log("isLoadingPages - index", isLoadingPages);
    console.log("pages.data - index", pagesData.data);
    if (pagesData?.length) {
      setHeroImages(
        homePage.blocos[0].item.carrossel.map((item: any) => item.item.imagem)
      );
      setProjectsInside(
        projectsPage.blocos[0].item.ensinos.map((item: any) => item.item)
      );
      setOpenEnrollment(pagesData[0].blocos[3].item);
    }
  }, [pagesData, isLoadingPages]);

  console.log("projectsInside", projectsInside);
  return (
    <main
      className={`projects-page projects flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="main-container">
        <Header />
        <div className="main">
          <div className="hero">
            <Image width="100" height="100" src="hero.jpg" alt="" />
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
          <div className="projects">
            {projectsInside?.map((item: any) => (
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
                        <div className="content-title">
                          {" "}
                          {projeto.item?.titulo}
                        </div>
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
          <OpenEnrollment data={openEnrollment} />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Projects;
