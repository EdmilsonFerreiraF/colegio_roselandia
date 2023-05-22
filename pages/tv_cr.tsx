import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Movies from "@/components/section/movies";
import OpenEnrollment from "@/components/section/openEnrollment";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const Projects = () => {
  const handlePageClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <main
      className={`tv-cr flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="container index">
        <Header />
        <div className="main">
          <div className="hero">
            <Image width="100" height="100" src="hero.jpg" alt="" />
          </div>
          <div className="title-subtitle">
            <div className="title">
              <h3>TV CR</h3>
            </div>
            <div className="subtitle">
              <p>
                Visamos prevalecer atributos emocionais, protagonistas e
                empreendedores.
              </p>
            </div>
          </div>
          <div className="tv-cr">
            <div className="title">TV CR</div>
            <Movies />
          </div>
          <OpenEnrollment />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Projects;
