import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ContactForm from "@/components/section/contactForm";
import OpenEnrollment from "@/components/section/openEnrollment";
import { AppContext } from "@/contexts/appProvider";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
    console.log("isLoadingPages - index", isLoadingPages);
    console.log("pages.data - index", pagesData.data);
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
}
