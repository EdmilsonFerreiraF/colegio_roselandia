import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import OpenEnrollment from "@/components/section/openEnrollment";
import OurHistory from "@/components/section/ourHistory";
import Partners from "@/components/section/partners";
import Projects from "@/components/section/projects";
import SchoolAttributes from "@/components/section/registration/schoolAttributes/schoolAttributes";
import ScheduleVisit from "@/components/section/scheduleVisit";
import { baseURL } from "@/constants/baseURL";
import { AppContext } from "@/contexts/appProvider";
import { Inter } from "next/font/google";
import { useContext, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Matricula = () => {
  const { isLoadingPages, pagesData } = useContext(AppContext) as any;

  const [schoolAttributes, setSchoolAttributes] = useState([]);
  const [heroImages, setHeroImages] = useState([]);
  const [projects, setProjects] = useState([]);
  const [ourHistory, setOurHistory] = useState([]);
  const [openEnrollment, setOpenEnrollment] = useState([]);
  const [partners, setPartners] = useState([]);
  const [scheduleForm, setScheduleForm] = useState<any>({});
  const [formDescription, setFormDescription] = useState<any>("");
  const [registrationInform, setRegistrationInform] = useState<any>("");
  const [footer, setFooter] = useState<any>({});
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    studentName: "",
    studentGrade: "",
  });
  const [header, setHeader] = useState<any>({});

  const handleInputChange = (e: any) => {
    setFields((prevState: any) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const findPage = (page: "Home" | "Matrícula" | "Geral") => {
    const pageData = pagesData.find(
      (pageItem: any) => pageItem.titulo === page
    );
    return pageData;
  };

  const homePage = findPage("Home");
  const matriculaPage = findPage("Matrícula");
  const generalPage = findPage("Geral");

  useEffect(() => {
    if (pagesData?.length) {
      setSchoolAttributes(
        matriculaPage.blocos[0].item.atributos_escola.map(
          (item: any) => item.item
        )
      );
      setRegistrationInform(
        matriculaPage.blocos[0].item.edital_matricula_arquivo
      );
      setFormDescription(matriculaPage.blocos[0].item.descricao_formulario);
      setScheduleForm(matriculaPage.blocos[0].item.formulario[0].item);
      setHeroImages(matriculaPage.blocos[0].item.banner);
      setPartners(
        homePage.blocos[3].item.parceiros.map((item: any) => item.item)
      );
      setOurHistory(pagesData[0].blocos[4].item);
      setProjects(
        homePage.blocos[6].item.projetos.map((item: any) => item.item)
      );
      setOpenEnrollment(pagesData[0].blocos[2].item);
      setFooter(generalPage.blocos[0].item);
      setHeader(generalPage.blocos[1].item);
    }
  }, [
    pagesData,
    isLoadingPages,
    homePage?.blocos,
    matriculaPage?.blocos,
    generalPage?.blocos,
  ]);

  const replaceTextVars = () => {
    const regex =
      /(<nome>)|(<email>)|(<tel \/ whatsapp>)|(<nome do aluno>)|(<série do aluno>)/g;

    function replacer(_: any, p1: any, p2: any, p3: any, p4: any) {
      if (p1) return fields.name;
      else if (p2) return fields.email;
      else if (p3) return fields.phone;
      else if (p4) return fields.studentName;

      return fields.studentGrade;
    }

    let text = scheduleForm?.mensagem?.replace(regex, replacer);

    return text;
  };

  const sendMail = async () => {
    const replacedText = replaceTextVars();

    const res = await fetch("/api/sendmail", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: fields.name,
        subject: scheduleForm.assunto,
        from: fields.email,
        to: scheduleForm.email_destinatario,
        text: replacedText,
      }),
    }).then((res: any) => {
      console.log("res", res);

      return res;
    });

    console.log("res", res);
  };

  return (
    <main
      className={`registration flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="main-container">
        <Header studentGuide={header.guia_do_estudante} />;{" "}
        <div className="main">
          <div
            className="registration hero"
            style={{
              background: `url(${baseURL}/assets/${heroImages}) no-repeat 27% 0`,
            }}
          ></div>
          <div className="registration">
            <SchoolAttributes data={schoolAttributes} />
          </div>
          <ScheduleVisit
            registrationInform={registrationInform}
            formDescription={formDescription}
            scheduleForm={scheduleForm}
            sendMail={sendMail}
            fields={fields}
            handleInput={handleInputChange}
          />
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
      </div>
    </main>
  );
};

export default Matricula;
