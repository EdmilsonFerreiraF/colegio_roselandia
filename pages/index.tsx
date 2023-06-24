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
  const [footer, setFooter] = useState<any>({});

  const findPage = (page: "Home" | "Geral") => {
    const pageData = pagesData.find(
      (pageItem: any) => pageItem.titulo === page
    );
    return pageData;
  };

  const homePage = findPage("Home");
  const generalPage = findPage("Geral");

  useEffect(() => {
    if (pagesData?.length) {
      setHeroImages(
        homePage.blocos[0].item.carrossel.map((item: any) => item.item)
      );
      setEducationLevel(
        homePage.blocos[1].item.ensinos.map((item: any) => item.item)
      );
      setInteracionistPartner(pagesData[0].blocos[5].item);
      setProjects(
        homePage.blocos[6].item.projetos.map((item: any) => item.item)
      );
      setOurHistory(pagesData[0].blocos[4].item);
      setOpenEnrollment(pagesData[0].blocos[2].item);
      setPartners(
        homePage.blocos[3].item.parceiros.map((item: any) => item.item)
      );
      setFooter(generalPage.blocos[0].item);
    }
  }, [pagesData, isLoadingPages, homePage?.blocos, generalPage?.blocos]);

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
          <Footer
            phonesStart={footer?.rodape_inicio_tel}
            address={footer?.rodape_endereco}
            phonesEnd={footer?.rodape_final_tel}
          />
        </div>
      </div>
      <NovicesModal />
    </main>
  );
};

export default Home;
