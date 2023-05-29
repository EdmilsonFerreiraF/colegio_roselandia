import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import OpenEnrollment from "@/components/section/openEnrollment";
import OurHistory from "@/components/section/ourHistory";
import Partners from "@/components/section/partners";
import Projects from "@/components/section/projects";
import { baseURL } from "@/constants/baseURL";
import { AppContext } from "@/contexts/appProvider";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const SocioInteracionista = () => {
  const { isLoadingPages, pagesData } = useContext(AppContext) as any;

  const [projects, setProjects] = useState<any>([]);
  const [ourHistory, setOurHistory] = useState<any>([]);
  const [openEnrollment, setOpenEnrollment] = useState<any>([]);
  const [partners, setPartners] = useState<any>([]);
  const [interacionistPartner, setInteracionistPartner] = useState<any>({});

  const findHome = (page: "Home" | "Sócio Interacionista") => {
    const pageData = pagesData.find(
      (pageItem: any) => pageItem.titulo === page
    );

    return pageData;
  };

  const homePage = findHome("Home");
  const interacionistPartnerPage = findHome("Sócio Interacionista");

  console.log("pagesData", pagesData);
  useEffect(() => {
    console.log("pagesData", pagesData);
  }, [pagesData]);

  useEffect(() => {
    console.log("isLoadingPages - index", isLoadingPages);
    console.log("pages.data - index", pagesData);
    if (pagesData?.length) {
      setInteracionistPartner(interacionistPartnerPage.blocos[0].item);
      setProjects(
        homePage.blocos[2].item.projetos.map((item: any) => item.item)
      );
      setOurHistory(homePage.blocos[5].item);
      setOpenEnrollment(homePage.blocos[3].item);
      setPartners(
        homePage.blocos[4].item.parceiros.map((item: any) => item.item)
      );
    }
  }, [pagesData, isLoadingPages]);

  return (
    <main
      className={`interacionist-partner flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="main-container">
        <Header />
        <div className="main">
          <div className="hero">
            <Image width="100" height="100" src="hero.jpg" alt="" />
          </div>
          <div className="article">
            <div className="title">
              Método de Ensino
              <span className="highlighted">Sócio Interacionista</span>
            </div>
            <div className="content">
              <div className="image">
                <Image
                  width="100"
                  height="100"
                  src={`${baseURL}/assets/${interacionistPartner.imagem_dentro_1}`}
                  alt=""
                />
                <Image
                  width="100"
                  height="100"
                  src={`${baseURL}/assets/${interacionistPartner.imagem_dentro_2}`}
                  alt=""
                />
              </div>
              <div className="text">{interacionistPartner.texto_dentro}</div>
            </div>
          </div>
        </div>
        <Projects data={projects} />
        <OurHistory data={ourHistory} />
        <OpenEnrollment data={openEnrollment} />
        <Partners data={partners} />
        <Footer />
      </div>
    </main>
  );
};

export default SocioInteracionista;
