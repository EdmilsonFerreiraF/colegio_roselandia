import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import ScheduleForm from "@/components/scheduleForm";
import EducationLevel from "@/components/section/educationLevel";
import { baseURL } from "@/constants/baseURL";
import { AppContext } from "@/contexts/appProvider";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const AgendarVisita = () => {
  const { isLoadingPages, pagesData } = useContext(AppContext) as any;

  const [heroImages, setHeroImages] = useState([]);
  const [educationLevel, setEducationLevel] = useState([]);
  const [scheduleForm, setScheduleForm] = useState<any>({});
  const [footer, setFooter] = useState<any>({});
  const [header, setHeader] = useState<any>({});

  const [fields, setFields] = useState({
    studentName: "",
    responsibleName: "",
    responsibleEmail: "",
    responsiblePhone: "",
  });

  const handleInputChange = (e: any) => {
    setFields((prevState: any) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const findPage = (page: "Home" | "Agende sua visita" | "Geral") => {
    const pageData = pagesData.find(
      (pageItem: any) => pageItem.titulo === page
    );

    return pageData;
  };

  const scheduleVisit = findPage("Agende sua visita");
  const generalPage = findPage("Geral");

  useEffect(() => {
    if (pagesData?.length) {
      setHeroImages(
        scheduleVisit.blocos[3].item.carrossel.map(
          (item: any) => item.item.imagem
        )
      );
      setEducationLevel(
        scheduleVisit.blocos[1].item.ensinos.map((item: any) => item.item)
      );
      setScheduleForm(scheduleVisit.blocos[2].item);
      setFooter(generalPage.blocos[0].item);
      setHeader(generalPage.blocos[1].item);
    }
  }, [pagesData, isLoadingPages, scheduleVisit?.blocos, generalPage?.blocos]);

  const replaceTextVars = () => {
    const regex = /(<nome do aluno>)|(<nome do responsável>)|(<email do responsável>|<tel \/ whatsapp do responsável>)/g;

    function replacer(_: any, p1: any, p2: any, p3: any, p4: any) {
      if (p1) return fields.studentName;
      else if (p2) return fields.responsibleName;
      else if (p3 === "<email do responsável>") return fields.responsibleEmail;

      return fields.responsiblePhone;
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
        name: fields.responsibleName,
        subject: scheduleForm.assunto,
        from: fields.responsibleEmail,
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
      className={`schedule-visit flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="main-container">
        <Header studentGuide={header.guia_do_estudante} />
        <div className="main">
          <div className="hero height-auto">
            <Image
              width="100"
              height="100"
              src={`${baseURL}/assets/${heroImages}`}
              alt=""
            />
          </div>
          <ScheduleForm
            fields={fields}
            setFields={setFields}
            sendMail={sendMail}
            handleChange={handleInputChange}
          />
          <EducationLevel data={educationLevel} />
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

export default AgendarVisita;
