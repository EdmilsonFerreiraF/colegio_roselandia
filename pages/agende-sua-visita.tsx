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

  const findHome = (page: "Home" | "Agende sua visita") => {
    const pageData = pagesData.find(
      (pageItem: any) => pageItem.titulo === page
    );

    return pageData;
  };

  const scheduleVisit = findHome("Agende sua visita");

  useEffect(() => {
    if (pagesData?.length) {
      setHeroImages(
        scheduleVisit.blocos[1].item.carrossel.map(
          (item: any) => item.item.imagem
        )
      );
      setEducationLevel(
        scheduleVisit.blocos[2].item.ensinos.map((item: any) => item.item)
      );
      setScheduleForm(scheduleVisit.blocos[3].item);
    }
  }, [pagesData, isLoadingPages]);

  const sendMail = async () => {
    const res = await fetch("/api/sendmail", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: fields.responsibleName,
        subject: scheduleForm.assunto,
        from: fields.responsibleEmail,
        to: scheduleForm.email_destinatario,
        text: `Nome do Aluno: ${fields.studentName}\n
        Nome do Responsável: ${fields.responsibleName}\n
        Email do Responsável: ${fields.responsibleEmail}\n
        Tel / Whatsapp do Responsável: ${fields.responsiblePhone}`,
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
        <Header />
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
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default AgendarVisita;
