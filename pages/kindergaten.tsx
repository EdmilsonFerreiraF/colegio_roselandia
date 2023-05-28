import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Articles from "@/components/section/articles";
import OpenEnrollment from "@/components/section/openEnrollment";
import OurHistory from "@/components/section/ourHistory";
import Partners from "@/components/section/partners";
import Projects from "@/components/section/projects";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const Kindergaten = () => {
  return (
    <main
      className={`ensino-infantil flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="index">
        <Header />
        <div className="main">
          <div className="hero">
            <Image
              width="100"
              height="100"
              src="ensino-infantil-hero.jpg"
              alt=""
            />
          </div>
          <Articles />
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