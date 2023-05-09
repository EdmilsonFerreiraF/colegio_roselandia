import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import OpenEnrollment from "@/components/section/openEnrollment";
import OurHistory from "@/components/section/ourHistory";
import Partners from "@/components/section/partners";
import Projects from "@/components/section/projects";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Kindergaten = () => {
  const handlePageClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <main
      className={`ensino-infantil flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="container index">
        <Header />
        <div className="main">
          <div className="hero">
            <img src="ensino-infantil-hero.jpg" alt="" />
          </div>
          <div className="reregistration"></div>
          <Projects />
          <OurHistory />
          <OpenEnrollment />
          <Partners />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Kindergaten;
