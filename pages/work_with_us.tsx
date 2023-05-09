import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ScheduleButton from "@/components/scheduleButton";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`work-with-us flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="container index">
        <Header />
        <div className="main">
          <div className="hero">
            <img src="trabalhe-conosco.jpg" alt="" />
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
                  placeholder="Nome da Vaga"
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
