import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Articles from "@/components/section/articles";
import OpenEnrollment from "@/components/section/openEnrollment";
import Projects from "@/components/section/projects";
import { baseURL } from "@/constants/baseURL";
import { AppContext } from "@/contexts/appProvider";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const EnsinoFundamental2 = () => {
  const { isLoadingPages, pagesData } = useContext(AppContext) as any;

  const [heroImages, setHeroImages] = useState([]);
  const [educationLevel, setEducationLevel] = useState([]);
  const [projects, setProjects] = useState([]);
  const [interacionistPartner, setInteracionistPartner] = useState([]);
  const [ourHistory, setOurHistory] = useState([]);
  const [openEnrollment, setOpenEnrollment] = useState([]);

  console.log("pagesData", pagesData);
  useEffect(() => {
    console.log("pagesData", pagesData);
  }, [pagesData]);

  const findHome = (page: "Home" | "Ensino Fundamental 2") => {
    const pageData = pagesData.find(
      (pageItem: any) => pageItem.titulo === page
    );
    return pageData;
  };

  const homePage = findHome("Home");
  const elementary1Page = findHome("Ensino Fundamental 2");

  useEffect(() => {
    console.log("isLoadingPages - index", isLoadingPages);
    console.log("pages.data - index", pagesData.data);
    if (pagesData?.length) {
      setEducationLevel(
        homePage.blocos[1].item.ensinos.map((item: any) => item.item)
      );
      setInteracionistPartner(
        homePage.blocos[1].item.ensinos.map((item: any) => item.item)
      );
      setHeroImages(
        elementary1Page.blocos[0].item.carrossel.map(
          (item: any) => item.item.imagem
        )
      );
      setProjects(
        homePage.blocos[2].item.projetos.map((item: any) => item.item)
      );
      setOpenEnrollment(pagesData[0].blocos[3].item);
    }
  }, [pagesData, isLoadingPages]);

  const ensinoFundamental2 = educationLevel.find(
    (item: any) => item.titulo === "Ensino Fundamental 2"
  );
  console.log("ensinoFundamental2", ensinoFundamental2);

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
          <Articles data={ensinoFundamental2} secondTextBgColor="#0b3503" />
        </div>
        <Projects data={projects} />
        <OpenEnrollment data={openEnrollment} />
        <Footer />
      </div>
    </main>
  );
};

export default EnsinoFundamental2;
