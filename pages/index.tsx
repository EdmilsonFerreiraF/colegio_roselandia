import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import EducationLevel from "@/components/section/educationLevel";
import OpenEnrollment from "@/components/section/openEnrollment";
import OurHistory from "@/components/section/ourHistory";
import Partners from "@/components/section/partners";
import Projects from "@/components/section/projects";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="index">
        <Header />
        <div className="main">
          <div className="hero">
            <img src="hero.jpg" alt="" />
          </div>
          <EducationLevel />
          <div className="interacionist-partner">
            <img src="section-6.jpg" alt="" />
          </div>
          <Projects />
          <OurHistory />
          <OpenEnrollment />
          <Partners />
          <Footer />
        </div>
      </div>
    </main>
  );
}
