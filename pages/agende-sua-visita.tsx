import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ScheduleForm from "@/components/scheduleForm";
import EducationLevel from "@/components/section/educationLevel";
import { AppContext } from "@/contexts/appProvider";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const AgendarVisita = () => {
  const { isLoadingPages, pagesData } = useContext(AppContext) as any;
  const handlePageClick = (url: string) => {
    window.location.href = url;
  };
  const [heroImages, setHeroImages] = useState([]);
  const [educationLevel, setEducationLevel] = useState([]);
  const [projects, setProjects] = useState([]);
  const [ourHistory, setOurHistory] = useState([]);
  const [openEnrollment, setOpenEnrollment] = useState([]);
  const [partners, setPartners] = useState([]);
  const [interacionistPartner, setInteracionistPartner] = useState({});

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
    if (pagesData?.length) {
      setHeroImages(
        homePage.blocos[0].item.carrossel.map((item: any) => item.item.imagem)
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
      className={`schedule-visit flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="main-container">
        <Header />
        <div className="main">
          <div className="hero">
            <Image width="100" height="100" src="agende-visita.jpg" alt="" />
          </div>
          <ScheduleForm />
          <EducationLevel data={educationLevel} />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default AgendarVisita;
