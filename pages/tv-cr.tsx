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
  const [footer, setFooter] = useState<any>({});
  const [header, setHeader] = useState<any>({});

  const findPage = (page: "Home" | "TV CR" | "Geral") => {
    const pageData = pagesData.find(
      (pageItem: any) => pageItem.titulo === page
    );
    return pageData;
  };

  const TVCRPage = findPage("TV CR");
  const generalPage = findPage("Geral");

  useEffect(() => {
    if (pagesData?.length) {
      setHeroImages(
        TVCRPage.blocos[1].item.carrossel.map((item: any) => item.item.imagem)
      );
      setProjects(
        TVCRPage.blocos[0].item.projetos_tvcr.map((item: any) => item.item)
      );
      setOpenEnrollment(pagesData[0].blocos[2].item);
      setFooter(generalPage.blocos[0].item);
      setHeader(generalPage.blocos[1].item);
    }
  }, [pagesData, isLoadingPages, TVCRPage?.blocos, generalPage?.blocos]);

  return (
    <main
      className={`tv-cr flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="main-container">
        <Header studentGuide={header.guia_do_estudante} />;{" "}
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
          <Footer
            phonesStart={footer?.rodape_inicio_tel}
            address={footer?.rodape_endereco}
            phonesEnd={footer?.rodape_final_tel}
          />
        </div>
      </div>
    </main>
  );
};

export default TVCR;
