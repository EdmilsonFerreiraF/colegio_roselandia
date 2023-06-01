import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";

import EducationLevel from "@/components/section/educationLevel";
import OpenEnrollment from "@/components/section/openEnrollment";
import OurHistory from "@/components/section/ourHistory";
import Partners from "@/components/section/partners";
import Projects from "@/components/section/projects";
import { Inter } from "next/font/google";
import { useContext, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

import Carousel from "@/components/carousel";
import NovicesModal from "@/components/novicesModal";
import InteracionistPartner from "@/components/section/interacionistPartner";
import { AppContext } from "@/contexts/appProvider";

const Home = () => {
  const { isLoadingPages, pagesData } = useContext(AppContext) as any;
  const [heroImages, setHeroImages] = useState<any>([]);
  const [educationLevel, setEducationLevel] = useState<any>([]);
  const [projects, setProjects] = useState<any>([]);
  const [ourHistory, setOurHistory] = useState<any>([]);
  const [openEnrollment, setOpenEnrollment] = useState<any>([]);
  const [partners, setPartners] = useState<any>([]);
  const [interacionistPartner, setInteracionistPartner] = useState<any>({});

  console.log("pagesData", pagesData);
  useEffect(() => {
    console.log("pagesData", pagesData);
  }, [pagesData]);

  const findHome = () => {
    const page = pagesData.find((pageItem: any) => pageItem.titulo === "Home");
    return page;
  };

  const homePage = findHome();

  useEffect(() => {
    console.log("isLoadingPages - index", isLoadingPages);
    console.log("pages.data - index", pagesData.data);
    console.log("heroImages", heroImages);

    if (pagesData?.length) {
      setHeroImages(
        homePage.blocos[0].item.carrossel.map((item: any) => item.item)
      );
      setEducationLevel(
        homePage.blocos[1].item.ensinos.map((item: any) => item.item)
      );
      setInteracionistPartner(pagesData[0].blocos[6].item);
      setProjects(
        homePage.blocos[2].item.projetos.map((item: any) => item.item)
      );
      setOurHistory(pagesData[0].blocos[5].item);
      setOpenEnrollment(pagesData[0].blocos[3].item);
      setPartners(
        homePage.blocos[4].item.parceiros.map((item: any) => item.item)
      );
    }
  }, [pagesData, isLoadingPages]);

  return (
    <main
      className={`index flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="main-container">
        <Header />
        <div className="main">
          <div className="hero">
            <Carousel images={heroImages} />
          </div>
          <EducationLevel data={educationLevel} indexPage />
          <InteracionistPartner imagem={interacionistPartner.imagem} />
          <Projects data={projects} />
          <OurHistory data={ourHistory} />
          <OpenEnrollment data={openEnrollment} />
          <Partners data={partners} />
          <Footer />
        </div>
      </div>
      <NovicesModal />
    </main>
  );
};

export default Home;
