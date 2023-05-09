import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import InnovativeTeaching from "@/components/section/innovativeTeaching";
import OpenEnrollment from "@/components/section/openEnrollment";
import OurHistory from "@/components/section/ourHistory";
import Partners from "@/components/section/partners";
import Projects from "@/components/section/projects";
import Reception from "@/components/section/reception";
import RoselandiaFamily from "@/components/section/roselandiaFamily";
import ScheduleVisit from "@/components/section/scheduleVisit";
import Welcome from "@/components/section/welcome";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Kindergaten = () => {
  return (
    <main
      className={`registration flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="container index">
        <Header />
        <div className="main">
          <div className="hero">
            <img src="hero.jpg" alt="" />
          </div>
          <div className="image-title">
            <p>Matrícula alunos novos 2023</p>
            <img src="matricula-novos.jpg" alt="" />
          </div>
          <div className="registration">
            <div className="topics">
              <Welcome />
              <RoselandiaFamily />
              <InnovativeTeaching />
              <Reception />
            </div>
          </div>
          <ScheduleVisit />
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
