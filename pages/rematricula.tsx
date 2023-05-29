import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
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

  const findPage = () => {
    const pageData = pagesData.find(
      (pageItem: any) => pageItem.titulo === "Rematrícula"
    );
    return pageData;
  };

  const reregistrationPage = findPage();

  useEffect(() => {
    console.log("isLoadingPages - index", isLoadingPages);
    console.log("pages.data - index", pagesData.data);
    if (pagesData?.length) {
      setHeroImages(
        reregistrationPage.blocos[0].item.carrossel.map(
          (item: any) => item.item.imagem
        )
      );
    }
  }, [pagesData, isLoadingPages]);
  console.log("reregistrationPage", reregistrationPage);

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
          <div className="reregistration">
            <div className="description">
              <div className="title title--upper">
                Acreditamos em uma união duradoura e de sucesso!
              </div>
              <div className="text">
                Estamos vivendo grandes momentos juntos!!! O nosso desafio maior
                é ser na vida de nossos estudantes a presença que necessitam
                para um pleno crescimento como um ser humano integral e mais
                feliz!
              </div>
              <div className="text">
                Continuamos acreditando que a educação é a ferramenta mais
                eficaz de desenvolver habilidades para se posicionarem como
                protagonistas dentro do enredo social.
              </div>
            </div>
            <div className="description">
              <div className="title">
                Agradecemos por fazerem parte da Família Roselandia!
              </div>
              <div className="text">
                Para MATRÍCULAS 2024, vamos oferecer uma condição diferenciada
                de REMATRÍCULA ANTECIPADA, a partir de OUTUBRO/2023.
              </div>
            </div>
            <div className="action">
              <div className="texts">
                <div className="text">
                  Sigam corretamente as orientações do EDITAL DE MATRÍCULAS a
                  ser publicado.
                </div>
                <div className="text">
                  Atentem, especialmente, para os prazos estabelecidos para
                  efetivação de Matrícula.
                </div>
              </div>
              <button
                className="edital-button"
                onClick={() => handlePageClick("/agende-sua-visita")}
              >
                Edital de Rematrícula
              </button>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Rematricula;
