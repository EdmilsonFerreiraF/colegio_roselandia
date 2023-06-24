import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
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
  const [heroImages, setHeroImages] = useState([]);
  const [footer, setFooter] = useState<any>({});

  const findPage = (page: "Home" | "Sócio Interacionista" | "Geral") => {
    const pageData = pagesData.find(
      (pageItem: any) => pageItem.titulo === page
    );

    return pageData;
  };

  const homePage = findPage("Home");
  const interacionistPartnerPage = findPage("Sócio Interacionista");
  const generalPage = findPage("Geral");

  useEffect(() => {
    if (pagesData?.length) {
      setInteracionistPartner(interacionistPartnerPage.blocos[1].item);
      setProjects(
        homePage.blocos[6].item.projetos.map((item: any) => item.item)
      );
      setHeroImages(
        interacionistPartnerPage.blocos[0].item.carrossel.map(
          (item: any) => item.item.imagem
        )
      );
      setOurHistory(homePage.blocos[4].item);
      setOpenEnrollment(homePage.blocos[2].item);
      setPartners(
        homePage.blocos[3].item.parceiros.map((item: any) => item.item)
      );
      setFooter(generalPage.blocos[0].item);
    }
  }, [
    pagesData,
    isLoadingPages,
    interacionistPartnerPage?.blocos,
    homePage?.blocos,
    generalPage?.blocos,
  ]);

  return (
    <main
      className={`interacionist-partner flex min-h-screen flex-col items-center justify-between ${inter.className}`}
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
                  src={`${baseURL}/assets/${interacionistPartner.imagem_1}`}
                  alt=""
                />
                <Image
                  width="100"
                  height="100"
                  src={`${baseURL}/assets/${interacionistPartner.imagem_2}`}
                  alt=""
                />
              </div>
              <div className="text">
                <div
                  dangerouslySetInnerHTML={{
                    __html: interacionistPartner.texto,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
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
    </main>
  );
};

export default SocioInteracionista;
