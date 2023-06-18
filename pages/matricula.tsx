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

  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    studentName: "",
    studentGrade: "",
  });

  const handleInputChange = (e: any) => {
    setFields((prevState: any) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const findPage = (page: "Home" | "Matrícula") => {
    const pageData = pagesData.find(
      (pageItem: any) => pageItem.titulo === page
    );
    return pageData;
  };

  const homePage = findPage("Home");
  const matriculaPage = findPage("Matrícula");

  useEffect(() => {
    if (pagesData?.length) {
      setSchoolAttributes(
        matriculaPage.blocos[0].item.atributos_escola.map(
          (item: any) => item.item
        )
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
    }
  }, [pagesData, isLoadingPages]);

  const sendMail = async () => {
    // try {
    const res = await fetch("/api/sendmail", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: fields.name,
        subject: scheduleForm.assunto,
        from: fields.email,
        to: scheduleForm.email_destinatario,
        text: `
        Nome: ${fields.name}\n
        Email: ${fields.email}\n
        Tel / Whatsapp do Responsável: ${fields.phone}
        Nome do Aluno: ${fields.studentName}\n
        Série do Aluno: ${fields.studentGrade}\n`,
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
        <Header />
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
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Matricula;
