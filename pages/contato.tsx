import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import ContactForm from "@/components/section/contactForm";
import OpenEnrollment from "@/components/section/openEnrollment";
import { baseURL } from "@/constants/baseURL";
import { AppContext } from "@/contexts/appProvider";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Contact = () => {
  const { isLoadingPages, pagesData } = useContext(AppContext) as any;
  const [openEnrollment, setOpenEnrollment] = useState([]);
  const [heroImages, setHeroImages] = useState([]);
  const [scheduleForm, setScheduleForm] = useState<any>({});

  const [fields, setFields] = useState({
    name: "",
    responsibleEmail: "",
    responsiblePhone: "",
    message: "",
  });

  const handleInputChange = (e: any) => {
    setFields((prevState: any) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const sendMail = async () => {
    const res = await fetch("/api/sendmail", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: fields.name,
        subject: scheduleForm.assunto,
        from: fields.responsibleEmail,
        to: scheduleForm.email_destinatario,
        text: `${fields.message} \n Tel / Whatsapp do responsável: ${fields.responsiblePhone}`,
      }),
    }).then((res: any) => {
      console.log("res", res);

      return res;
    });

    console.log("res", res);
  };

  console.log("pagesData", pagesData);
  useEffect(() => {
    console.log("pagesData", pagesData);
  }, [pagesData]);

  const findPage = (page: "Home" | "Contato") => {
    const pageData = pagesData.find(
      (pageItem: any) => pageItem.titulo === page
    );
    return pageData;
  };

  const contactPage = findPage("Contato");

  useEffect(() => {
    if (pagesData?.length) {
      setHeroImages(
        contactPage.blocos[0].item.carrossel.map(
          (item: any) => item.item.imagem
        )
      );
      setScheduleForm(contactPage.blocos[1].item);
      setOpenEnrollment(pagesData[0].blocos[2].item);
    }
  }, [pagesData, isLoadingPages, contactPage?.blocos]);

  return (
    <main
      className={`contact schedule-visit flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="main-container">
        <Header />
        <div className="main">
          <div className="hero">
            <Image
              width="100"
              height="100"
              src={`${baseURL}/assets/${heroImages}`}
              alt="contact image"
            />
          </div>
          <ContactForm
            fields={fields}
            handleInput={handleInputChange}
            sendMail={sendMail}
          />
          <OpenEnrollment
            data={openEnrollment}
            handleInput={handleInputChange}
          />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Contact;
