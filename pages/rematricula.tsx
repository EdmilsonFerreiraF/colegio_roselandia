import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import { baseURL } from "@/constants/baseURL";
import { AppContext } from "@/contexts/appProvider";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Rematricula = () => {
  const { isLoadingPages, pagesData } = useContext(AppContext) as any;
  const handlePageClick = (url: string) => {
    window.location.href = url;
  };
  const [heroImages, setHeroImages] = useState([]);
  const [reregistration, setReregistration] = useState<any>({});
  const [footer, setFooter] = useState<any>({});

  const findPage = (title: "Rematrícula" | "Geral") => {
    const pageData = pagesData.find(
      (pageItem: any) => pageItem.titulo === title
    );

    return pageData;
  };

  console.log("reregistration", reregistration);
  const reregistrationPage = findPage("Rematrícula");
  const generalPage = findPage("Geral");

  useEffect(() => {
    if (pagesData?.length) {
      setHeroImages(
        reregistrationPage.blocos[0].item.carrossel.map(
          (item: any) => item.item.imagem
        )
      );
      setReregistration(reregistrationPage.blocos[1].item);
      setFooter(generalPage.blocos[0].item);
    }
  }, [
    pagesData,
    isLoadingPages,
    reregistrationPage?.blocos,
    generalPage?.blocos,
  ]);

  console.log("footer", footer);

  return (
    <main
      className={`reregistration ensino-infantil flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="main-container">
        <Header />
        <div className="main">
          <div
            className="reregistration hero"
            style={{
              background: `url(${baseURL}/assets/${heroImages}) no-repeat 27% 0`,
            }}
          ></div>
          <div className="reregistration-section">
            <div className="description">
              <div
                className="text"
                dangerouslySetInnerHTML={{ __html: reregistration.texto }}
              ></div>
            </div>
            <div className="action">
              <a
                href={`${baseURL}/assets/${reregistration.edital_rematricula}.pdf`}
                target="_blank"
                className="edital-button"
                download="Edital de rematricula"
              >
                Edital de Rematrícula
              </a>
            </div>
          </div>
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

export default Rematricula;
