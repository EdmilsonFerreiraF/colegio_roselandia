import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import ScheduleButton from "@/components/scheduleButton";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`work-with-us flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="main-container">
        <Header />
        <div className="main">
          <div className="hero">
            <Image width="100" height="100" src="trabalhe-conosco.jpg" alt="" />
          </div>
          <div className="container">
            <div className="form">
              <div className="description">
                <div className="title">
                  Vamos juntos transformar o mundo através da educação?
                </div>
                <p className="text">
                  Se você acredita nesse propósito vem trabalhar com a gente!
                </p>
                <p className="text">
                  Cadastre seu currículo em uma de nossas vagas.
                </p>
              </div>
              <div className="form-control">
                <input
                  type="text"
                  className="input"
                  placeholder="Vagas Disponíveis"
                />
              </div>
              <div className="form-actions">
                <button className="attach-resume-button">
                  Anexar currículo
                </button>
                <ScheduleButton />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
