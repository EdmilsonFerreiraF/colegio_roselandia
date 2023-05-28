import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import EducationLevel from "@/components/section/educationLevel";
import OpenEnrollment from "@/components/section/openEnrollment";
import OurHistory from "@/components/section/ourHistory";
import Partners from "@/components/section/partners";
import Projects from "@/components/section/projects";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const inter = Inter({ subsets: ["latin"] });

import { baseURL } from "@/constants/baseURL";
import { AppContext } from "@/contexts/appProvider";
import { Autoplay, Navigation, Pagination } from "swiper";
import NovicesModal from "@/components/novicesModal";


export default function Home() {
  const { isLoadingPages, pagesData } = useContext(AppContext) as any;
  const handlePageClick = (url: string) => {
    window.location.href = url;
  };
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
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="index">
        <Header />
        <div className="main">
          <div className="hero">
            <Swiper
              autoplay={{
                delay: 3500,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              effect="fade"
              fadeEffect={{
                crossFade: true,
              }}
              pagination={{
                type: "progressbar",
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {heroImages.map((heroImage: any) => (
                <SwiperSlide key={heroImage}>
                  <Image
                    width="100"
                    height="100"
                    src={`${baseURL}/assets/${heroImage}`}
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <EducationLevel data={educationLevel} indexPage />
          <div
            className="interacionist-partner"
            onClick={() => handlePageClick("interacionist_partner")}
          >
            <Image
              width="100"
              height="100"
              src={`${baseURL}/assets/${interacionistPartner.imagem}`}
              alt=""
            />
          </div>
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
}
