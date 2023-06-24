import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import SingleFileUploadForm from "@/components/singleFileUploadForm";
import { baseURL } from "@/constants/baseURL";
import { AppContext } from "@/contexts/appProvider";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { isLoadingPages, pagesData } = useContext(AppContext) as any;
  const [openJobs, setOpenJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState("Vagas Disponíveis");
  const [heroImages, setHeroImages] = useState([]);
  const [scheduleForm, setScheduleForm] = useState<any>({});
  const [footer, setFooter] = useState<any>({});
  const [header, setHeader] = useState<any>({});

  const findPage = (page: "Home" | "Trabalhe conosco" | "Geral") => {
    const pageData = pagesData.find(
      (pageItem: any) => pageItem.titulo === page
    );
    return pageData;
  };

  const workWithUsPage = findPage("Trabalhe conosco");
  const generalPage = findPage("Geral");

  const handleSelectJob = (e: any) => {
    setSelectedJob(e.target.value);
  };

  useEffect(() => {
    if (pagesData?.length) {
      setHeroImages(
        workWithUsPage.blocos[0].item.carrossel.map(
          (item: any) => item.item.imagem
        )
      );
      setScheduleForm(workWithUsPage.blocos[1].item);
      setOpenJobs(
        workWithUsPage.blocos[1].item.vagas_disponiveis.map(
          (item: any) => item.item
        )
      );
      setFooter(generalPage.blocos[0].item);
      setHeader(generalPage.blocos[1].item);
    }
  }, [pagesData, isLoadingPages, workWithUsPage?.blocos, generalPage?.blocos]);

  const emailProps = {
    name: "Candidato",
    subject: scheduleForm.assunto,
    from: scheduleForm.email_remetente,
    to: scheduleForm.email_destinatario,
    text: `${scheduleForm.mensagem} ${selectedJob}`,
  };

  return (
    <main
      className={`work-with-us flex min-h-screen flex-col items-center justify-between ${inter.className}`}
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
          <div className="container">
            <div className="form">
              <div className="description">
                <div className="title">
                  Vamos juntos transformar o mundo através da educação?
                </div>
                <p className="text">
                  Se você acredita nesse propósito vem trabalhar com a gente!
                </p>
                <p className="text">
                  Cadastre seu currículo em uma de nossas vagas.
                </p>
              </div>
              <div className="form-control">
                <select
                  className="input"
                  value={selectedJob}
                  onChange={(e) => handleSelectJob(e)}
                >
                  <option disabled>Vagas Disponíveis</option>
                  {openJobs.map((item: any) => (
                    <option value={item.titulo} key={item.titulo}>
                      {item.titulo}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-actions">
                <SingleFileUploadForm emailProps={emailProps} />
              </div>
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
}
