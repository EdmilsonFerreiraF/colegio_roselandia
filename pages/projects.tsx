import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import OpenEnrollment from "@/components/section/openEnrollment";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const Projects = () => {
  return (
    <main
      className={`projects flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="container index">
        <Header />
        <div className="main">
          <div className="hero">
            <Image width="100" height="100" src="hero.jpg" alt="" />
          </div>
          <div className="title-subtitle">
            <div className="title">
              <h3>Projetos</h3>
            </div>
            <div className="subtitle">
              <p>
                Visamos prevalecer atributos emocionais, protagonistas e
                empreendedores.
              </p>
            </div>
          </div>
          <div className="projects">
            <div className="project-title">Infantil / Fundamental 1</div>
            <div className="project">
              <div className="content-1">
                <div className="image-1">
                  <Image width="100" height="100" src="project-1.jpg" alt="" />
                </div>
                <div className="content-title">Feira de ciências</div>
                <div className="text-1 text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <div className="content-2">
                <div className="image-2">
                  <Image width="100" height="100" src="projects.jpg" alt="" />
                </div>
                <div className="text-3 text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
          </div>
          <OpenEnrollment />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Projects;
