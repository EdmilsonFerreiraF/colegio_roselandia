import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import Movies from "@/components/section/movies";
import OpenEnrollment from "@/components/section/openEnrollment";
import { baseURL } from "@/constants/baseURL";
import { AppContext } from "@/contexts/appProvider";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const TVCR = () => {
  const { isLoadingPages, pagesData } = useContext(AppContext) as any;
  const [heroImages, setHeroImages] = useState([]);
  const [projects, setProjects] = useState([]);
  const [openEnrollment, setOpenEnrollment] = useState([]);

  const findPage = (page: "Home" | "TV CR") => {
    const pageData = pagesData.find(
      (pageItem: any) => pageItem.titulo === page
    );
    return pageData;
  };

  const homePage = findPage("Home");
  const TVCRPage = findPage("TV CR");

  console.log("projects", projects);
  useEffect(() => {
    console.log("isLoadingPages - index", isLoadingPages);
    console.log("pages.data - index", pagesData.data);
    if (pagesData?.length) {
      setHeroImages(
        homePage.blocos[0].item.carrossel.map((item: any) => item.item.imagem)
      );
      setProjects(
        TVCRPage.blocos[0].item.projetos_tvcr.map((item: any) => item.item)
      );
      setOpenEnrollment(pagesData[0].blocos[3].item);
    }
  }, [pagesData, isLoadingPages]);

  return (
    <main
      className={`tv-cr flex min-h-screen flex-col items-center justify-between ${inter.className}`}
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
          <div className="tv-cr-container">
            <div className="title">
              <h3>TV CR</h3>
            </div>
            <Movies data={projects} />
          </div>
          <OpenEnrollment data={openEnrollment} />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default TVCR;
