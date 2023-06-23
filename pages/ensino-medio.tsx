import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import Articles from "@/components/section/articles";
import OpenEnrollment from "@/components/section/openEnrollment";
import Projects from "@/components/section/projects";
import { baseURL } from "@/constants/baseURL";
import { AppContext } from "@/contexts/appProvider";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const EnsinoMedio = () => {
  const { isLoadingPages, pagesData } = useContext(AppContext) as any;

  const [heroImages, setHeroImages] = useState([]);
  const [educationLevel, setEducationLevel] = useState([]);
  const [projects, setProjects] = useState([]);
  const [openEnrollment, setOpenEnrollment] = useState([]);

  const findPage = (page: "Home" | "Ensino Médio") => {
    const pageData = pagesData.find(
      (pageItem: any) => pageItem.titulo === page
    );
    return pageData;
  };

  const homePage = findPage("Home");
  const highSchoolPage = findPage("Ensino Médio");

  useEffect(() => {
    console.log("isLoadingPages - index", isLoadingPages);
    console.log("pages.data - index", pagesData.data);
    if (pagesData?.length) {
      setEducationLevel(highSchoolPage.blocos[1].item);
      setHeroImages(
        highSchoolPage.blocos[0].item.carrossel.map(
          (item: any) => item.item.imagem
        )
      );
      setProjects(
        highSchoolPage.blocos[2].item.projetos.map((item: any) => item.item)
      );
      setOpenEnrollment(homePage.blocos[2].item);
    }
  }, [pagesData, isLoadingPages, homePage?.blocos, highSchoolPage?.blocos]);

  return (
    <main
      className={`ensino-infantil flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="main-container">
        <Header />
        <div className="main">
          <div className="hero">
            <Image
              width="100"
              height="100"
              src={`${baseURL}/assets/${heroImages}`}
              alt=""
            />
          </div>
          <Articles
            data={educationLevel}
            secondTextBgColor="#5867cc"
            variation="high"
          />
        </div>
        <Projects data={projects} />
        <OpenEnrollment data={openEnrollment} />
        <Footer />
      </div>
    </main>
  );
};

export default EnsinoMedio;
