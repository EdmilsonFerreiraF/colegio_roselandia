import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
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

  const [heroImages, setHeroImages] = useState([]);
  const [documentary, setDocumentary] = useState([]);
  const [ourHistory, setOurHistory] = useState([]);
  const [openEnrollment, setOpenEnrollment] = useState([]);
  const [footer, setFooter] = useState<any>({});
  const [header, setHeader] = useState<any>({});

  const findPage = (page: "Home" | "Nossa história" | "Geral") => {
    const pageData = pagesData.find(
      (pageItem: any) => pageItem.titulo === page
    );
    return pageData;
  };

  const homePage = findPage("Home");
  const ourHistoryPage = findPage("Nossa história");
  const generalPage = findPage("Geral");
  useEffect(() => {
    if (pagesData?.length) {
      setHeroImages(
        homePage.blocos[0].item.carrossel.map((item: any) => item.item.imagem)
      );
      setOurHistory(ourHistoryPage.blocos[0].item);
      setDocumentary(ourHistoryPage.blocos[1].item);
      setOpenEnrollment(homePage.blocos[2].item);
      setFooter(generalPage.blocos[0].item);
      setHeader(generalPage.blocos[1].item);
    }
  }, [
    pagesData,
    isLoadingPages,
    ourHistoryPage?.blocos,
    homePage?.blocos,
    generalPage?.blocos,
  ]);

  return (
    <main
      className={`our-history-page flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="index">
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
          <Articles data={ourHistory} />
          <Documentary data={documentary} />
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
export default NossaHistoria;
