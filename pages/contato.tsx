import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import ContactForm from "@/components/section/contactForm";
import OpenEnrollment from "@/components/section/openEnrollment";
import { AppContext } from "@/contexts/appProvider";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Contact = () => {
  const { isLoadingPages, pagesData } = useContext(AppContext) as any;
  const [openEnrollment, setOpenEnrollment] = useState([]);

  console.log("pagesData", pagesData);
  useEffect(() => {
    console.log("pagesData", pagesData);
  }, [pagesData]);

  const findHome = () => {
    const page = pagesData.find((pageItem: any) => pageItem.titulo === "Home");
    return page;
  };

  const homePage = findHome();

  useEffect(() => {
    if (pagesData?.length) {
      setOpenEnrollment(pagesData[0].blocos[3].item);
    }
  }, [pagesData, isLoadingPages]);

  return (
    <main
      className={`schedule-visit flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="main-container">
        <Header />
        <div className="main">
          <div className="hero">
            <Image
              width="100"
              height="100"
              src="contato.jpg"
              alt="contact image"
            />
          </div>
          <ContactForm />
          <OpenEnrollment data={openEnrollment} />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Contact;
