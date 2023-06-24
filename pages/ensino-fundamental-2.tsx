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

const EnsinoFundamental2 = () => {
  const { isLoadingPages, pagesData } = useContext(AppContext) as any;

  const [heroImages, setHeroImages] = useState([]);
  const [educationLevel, setEducationLevel] = useState([]);
  const [projects, setProjects] = useState([]);
  const [openEnrollment, setOpenEnrollment] = useState([]);
  const [footer, setFooter] = useState<any>({});
  const findPage = (page: "Home" | "Ensino Fundamental 2" | "Geral") => {
    const pageData = pagesData.find(
      (pageItem: any) => pageItem.titulo === page
    );
    return pageData;
  };

  const elementary2Page = findPage("Ensino Fundamental 2");
  const generalPage = findPage("Geral");
  useEffect(() => {
    if (pagesData?.length) {
      setEducationLevel(elementary2Page.blocos[1].item);
      setHeroImages(
        elementary2Page.blocos[0].item.carrossel.map(
          (item: any) => item.item.imagem
        )
      );
      setProjects(
        elementary2Page.blocos[2].item.projetos.map((item: any) => item.item)
      );
      setOpenEnrollment(pagesData[0].blocos[2].item);
      setFooter(generalPage.blocos[0].item);
    }
  }, [pagesData, isLoadingPages, elementary2Page?.blocos, generalPage?.blocos]);

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
          <Articles data={educationLevel} secondTextBgColor="#0b3503" />
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

export default EnsinoFundamental2;
