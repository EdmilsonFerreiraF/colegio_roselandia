import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Articles from "@/components/section/articles";
import Documentary from "@/components/section/documentary";
import OpenEnrollment from "@/components/section/openEnrollment";
import { baseURL } from "@/constants/baseURL";
import { AppContext } from "@/contexts/appProvider";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const NossaHistoria = () => {
  const { isLoadingPages, pagesData } = useContext(AppContext) as any;

  const [schoolAttributes, setSchoolAttributes] = useState([]);
  const [heroImages, setHeroImages] = useState([]);
  const [documentary, setDocumentary] = useState([]);
  const [projectsInside, setProjectsInside] = useState([]);
  const [ourHistory, setOurHistory] = useState([]);
  const [openEnrollment, setOpenEnrollment] = useState([]);
  const [partners, setPartners] = useState([]);

  console.log("pagesData", pagesData);
  useEffect(() => {
    console.log("pagesData", pagesData);
  }, [pagesData]);

  const findPage = (page: "Home" | "Nossa história") => {
    const pageData = pagesData.find(
      (pageItem: any) => pageItem.titulo === page
    );
    return pageData;
  };

  const homePage = findPage("Home");
  const ourHistoryPage = findPage("Nossa história");

  console.log("schoolAttributes", schoolAttributes);
  useEffect(() => {
    console.log("isLoadingPages - index", isLoadingPages);
    console.log("pages.data - index", pagesData.data);
    if (pagesData?.length) {
      setHeroImages(
        homePage.blocos[0].item.carrossel.map((item: any) => item.item.imagem)
      );
      setOurHistory(ourHistoryPage.blocos[0].item);
      setDocumentary(ourHistoryPage.blocos[1].item);
      setOpenEnrollment(homePage.blocos[3].item);
    }
  }, [pagesData, isLoadingPages]);

  console.log("projectsInside", projectsInside);
  console.log("documentary", documentary);

  return (
    <main
      className={`our-history-page flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="container index">
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
          <Articles data={ourHistory} />
          <Documentary data={documentary} />
          <OpenEnrollment data={openEnrollment} />
          <Footer />
        </div>
      </div>
    </main>
  );
};
export default NossaHistoria;
