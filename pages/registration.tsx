import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SchoolAttributes from "@/components/schoolAttributes";
import OpenEnrollment from "@/components/section/openEnrollment";
import OurHistory from "@/components/section/ourHistory";
import Partners from "@/components/section/partners";
import Projects from "@/components/section/projects";
import ScheduleVisit from "@/components/section/scheduleVisit";
import { AppContext } from "@/contexts/appProvider";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Kindergaten = () => {
  const { isLoadingPages, pagesData } = useContext(AppContext) as any;

  const [schoolAttributes, setSchoolAttributes] = useState([]);
  const [heroImages, setHeroImages] = useState([]);
  const [educationLevel, setEducationLevel] = useState([]);
  const [projects, setProjects] = useState([]);
  const [ourHistory, setOurHistory] = useState([]);
  const [openEnrollment, setOpenEnrollment] = useState([]);
  const [partners, setPartners] = useState([]);

  console.log("pagesData", pagesData);
  useEffect(() => {
    console.log("pagesData", pagesData);
  }, [pagesData]);

  const findPage = (page: "Home" | "Matrícula alunos novos") => {
    const pageData = pagesData.find(
      (pageItem: any) => pageItem.titulo === page
    );
    return pageData;
  };

  const homePage = findPage("Home");
  const matriculaPage = findPage("Matrícula alunos novos");

  console.log("schoolAttributes", schoolAttributes);
  useEffect(() => {
    console.log("isLoadingPages - index", isLoadingPages);
    console.log("pages.data - index", pagesData.data);
    if (pagesData?.length) {
      setEducationLevel(
        homePage.blocos[1].item.ensinos.map((item: any) => item.item)
      );
      setSchoolAttributes(
        matriculaPage.blocos[0].item.atributos_escola.map(
          (item: any) => item.item
        )
      );
      setHeroImages(
        homePage.blocos[0].item.carrossel.map((item: any) => item.item.imagem)
      );
      setPartners(
        homePage.blocos[4].item.parceiros.map((item: any) => item.item)
      );
      setOurHistory(pagesData[0].blocos[5].item);
      setProjects(
        homePage.blocos[2].item.projetos.map((item: any) => item.item)
      );
      setOpenEnrollment(pagesData[0].blocos[3].item);
    }
  }, [pagesData, isLoadingPages]);

  return (
    <main
      className={`registration flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="main-container">
        <Header />
        <div className="main">
          <div
            className="hero"
            style={{
              marginBottom: 0,
            }}
          >
            <Image width="100" height="100" src="hero.jpg" alt="" />
          </div>
          <div className="image-title">
            <Image width="100" height="100" src="matricula-novos.jpg" alt="" />
          </div>
          <div className="registration">
            <SchoolAttributes data={schoolAttributes} />
          </div>
          <ScheduleVisit />
          <Projects data={projects} />
          <OurHistory data={ourHistory} />
          <OpenEnrollment data={openEnrollment} />
          <Partners data={partners} />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Kindergaten;
