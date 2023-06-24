import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import Articles from "@/components/section/articles";
import OpenEnrollment from "@/components/section/openEnrollment";
import Projects from "@/components/section/projects";
import { baseURL } from "@/constants/baseURL";
import { AppContext } from "@/contexts/appProvider";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const EnsinoMedio = () => {
  const { isLoadingPages, pagesData } = useContext(AppContext) as any;

  const [heroImages, setHeroImages] = useState([]);
  const [educationLevel, setEducationLevel] = useState([]);
  const [projects, setProjects] = useState([]);
  const [openEnrollment, setOpenEnrollment] = useState([]);
  const [footer, setFooter] = useState<any>({});
  const [header, setHeader] = useState<any>({});

  const findPage = (page: "Home" | "Ensino Médio" | "Geral") => {
    const pageData = pagesData.find(
      (pageItem: any) => pageItem.titulo === page
    );
    return pageData;
  };

  const homePage = findPage("Home");
  const highSchoolPage = findPage("Ensino Médio");
  const generalPage = findPage("Geral");

  useEffect(() => {
    console.log("isLoadingPages - index", isLoadingPages);
    console.log("pages.data - index", pagesData.data);

    if (pagesData?.length) {
      setEducationLevel(highSchoolPage.blocos[1].item);
      setHeroImages(
        highSchoolPage.blocos[0].item.carrossel.map(
          (item: any) => item.item.imagem
        )
      );
      setProjects(
        highSchoolPage.blocos[2].item.projetos.map((item: any) => item.item)
      );
      setOpenEnrollment(homePage.blocos[2].item);
      setFooter(generalPage.blocos[0].item);
      setHeader(generalPage.blocos[1].item);
    }
  }, [
    pagesData,
    isLoadingPages,
    homePage?.blocos,
    highSchoolPage?.blocos,
    generalPage?.blocos,
  ]);

  return (
    <main
      className={`ensino-infantil flex min-h-screen flex-col items-center justify-between ${inter.className}`}
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
          <Articles
            data={educationLevel}
            secondTextBgColor="#5867cc"
            variation="high"
          />
        </div>
        <Projects data={projects} />
        <OpenEnrollment data={openEnrollment} />
        <Footer
          phonesStart={footer?.rodape_inicio_tel}
          address={footer?.rodape_endereco}
          phonesEnd={footer?.rodape_final_tel}
        />
      </div>
    </main>
  );
};

export default EnsinoMedio;
