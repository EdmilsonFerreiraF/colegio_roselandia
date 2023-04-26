import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handlePageClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="index">
        <div className="topbar">
          <div className="topbar-nav">
            <div className="student-guide">Guia do estudante</div>
            <div className="student-portal">Portal do aluno</div>
          </div>
        </div>
        <nav className="navbar">
          <div className="navbar-wrapper">
            <div
              className="logo hover:cursor-pointer"
              onClick={() => handlePageClick("/")}
            >
              <img
                className="hover:cursor-pointer"
                src="logo.jpg"
                alt=""
                onClick={() => handlePageClick("/")}
              />
            </div>
            <div className="navbar-end">
              <ul className="navbar-menu">
                <li className="navbar-item hover:cursor-pointer">Ensino*</li>
                <li
                  onClick={() => handlePageClick("registration")}
                  className="navbar-item hover:cursor-pointer"
                >
                  Matrículas*
                </li>
                <li
                  onClick={() => handlePageClick("projects")}
                  className="navbar-item hover:cursor-pointer"
                >
                  Projetos
                </li>
                <li
                  onClick={() => handlePageClick("contact")}
                  className="navbar-item hover:cursor-pointer"
                >
                  Contato*
                </li>
              </ul>
              <div className="schedule-button">
                <div className="cutted-side"></div>
                <div
                  className="btn hover:cursor-pointer"
                  onClick={() => handlePageClick("schedule_visit")}
                >
                  Agende sua Visita
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="main">
          <div className="hero">
            <img src="hero.jpg" alt="" />
          </div>
          <div className="education-level-list">
            <div
              className="education-level-item hover:cursor-pointer"
              onClick={() => handlePageClick("kindergaten")}
            >
              <div className="title-container">
                <div className="title">Ensino Infantil</div>
                <div className="subtitle-container">
                  <div className="subtitle">
                    Descobrindo o mundo, tão fantástico
                    <span className="more-btn">Mais{">>"}</span>
                  </div>
                </div>
              </div>
              <div className="image">
                <img src="school-1.jpg" alt="" />
              </div>
            </div>
            <div
              className="education-level-item hover:cursor-pointer"
              onClick={() => handlePageClick("elementary_school-1")}
            >
              <div className="title-container">
                <div className="title">Ensino Fundamental 1</div>
                <div className="subtitle">
                  Desenvolvendo autonomia e afetividade
                  <span className="more-btn">Mais{">>"}</span>
                </div>
              </div>
              <div className="image">
                <img src="school-2.jpg" alt="" />
              </div>
            </div>
            <div
              className="education-level-item hover:cursor-pointer"
              onClick={() => handlePageClick("elementary_school-2")}
            >
              <div className="title-container">
                <div className="title">Ensino Fundamental 2</div>
                <div className="subtitle">
                  Preparando para a vida
                  <span className="more-btn">Mais{">>"}</span>
                </div>
              </div>
              <div className="image">
                <img src="school-3.jpg" alt="" />
              </div>
            </div>
            <div
              className="education-level-item hover:cursor-pointer"
              onClick={() => handlePageClick("high_school")}
            >
              <div className="title-container">
                <div className="title">Ensino Médio</div>
                <div className="subtitle">
                  Competência, Disciplina e Desafio.
                  <span className="more-btn">Mais{">>"}</span>
                </div>
              </div>
              <div className="image">
                <img src="school-4.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="interacionist-partner">
            <img src="section-6.jpg" alt="" />
          </div>
          <div className="projects">
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
            <div className="project-list">
              <div className="project-item">
                <img src="project-1.jpg" alt="" />
              </div>
              <div className="project-item">
                <img src="project-2.jpg" alt="" />
              </div>
              <div className="project-item">
                <img src="project-3.jpg" alt="" />
              </div>
              <div className="project-item">
                <img src="project-4.jpg" alt="" />
              </div>
              <div className="project-item">
                <img src="project-5.jpg" alt="" />
              </div>
              <div className="project-item">
                <img src="project-6.jpg" alt="" />
              </div>
              <div className="project-item">
                <img src="project-7.jpg" alt="" />
              </div>
              <div className="project-item">
                <img src="project-8.jpg" alt="" />
              </div>
              <div className="project-item">
                <img src="project-9.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="our-history">
            <div className="title-subtitle">
              <div className="title">
                <h3>Nossa história - 30 anos</h3>
              </div>
              <div className="subtitle">
                <p>
                  Originou-se em 1993 com o nome Banca da Tia Rosinha, tinha o
                  objetivo de auxiliar as crianças com as tarefas escolares e
                  melhorar o aprendizado das mesmas, oferecendo apenas as séries
                  iniciais e Pré-Escola. O Colégio nasceu de um sonho de uma
                  jovem, iniciado na cozinha da mãe o desejo e a necessidade de
                  trabalhar para ajudar a família. A professora fudnadora
                  Rosângela Santos (Pró Rosa), que vislumbrava um ideal de
                  educação onde a integração entre a Escola e A família
                  constitui o pilar básico na formação do indivíduo social.
                </p>
                <div className="down-arrow-icon"></div>
              </div>
            </div>
            <div className="video">
              <img src="our-history-youtube.jpg" alt="" />
            </div>
          </div>
          <div className="open-enrollment">
            <div className="image">
              <img src="enrollment.jpg" alt="" />
            </div>
            <div className="action">
              <div className="title">Matrículas Abertas</div>
              <div
                className="schedule-visit hover:cursor-pointer"
                onClick={() => handlePageClick("schedule_visit")}
              >
                Agende sua Visita
              </div>
            </div>
          </div>
          <div className="partners">
            <div className="title">
              <h3>Parceiros</h3>
            </div>
            <div className="partners-list">
              <div className="partner-item">
                <img src="partner-1.jpg" alt="" />
              </div>
              <div className="partner-item">
                <img src="partner-2.jpg" alt="" />
              </div>
              <div className="partner-item">
                <img src="partner-3.jpg" alt="" />
              </div>
              <div className="partner-item">
                <img src="partner-4.jpg" alt="" />
              </div>
              <div className="partner-item">
                <img src="partner-5.jpg" alt="" />
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="footer-wrapper">
              <div className="footer-start">
                <ul className="channel-menu">
                  <li>Guia do Estudante</li>
                  <li>Portal do Aluno</li>
                  <li>TV CR</li>
                </ul>
                <ul className="pages-nav">
                  <li>Ensino</li>
                  <li>Matrícula</li>
                  <li>Projetos</li>
                  <li>Contato</li>
                </ul>
                <ul className="phones">
                  <div className="tile">Telefones</div>
                  <li>(71) 3252-8954</li>
                  <li>(71) 9 9214-2717</li>
                </ul>
                <div className="cr-press">CR Imprensa</div>
              </div>
              <div className="footer-center">
                <p>
                  Rua Benedita P. dos Santos, Qd. 02, LT. 39, CEP: 42.739-630 -
                  Itinga / Lauro de Freitas / BA.
                </p>
              </div>
              <div className="footer-end">
                <ul className="social-medias">
                  <li className="social-medias-item">
                    <img src="instagram.png" alt="" />
                  </li>
                  <li className="social-medias-item">
                    <img src="youtube.png" alt="" />
                  </li>
                  <li className="social-medias-item">
                    <img src="facebook.png" alt="" />
                  </li>
                </ul>
                <div
                  className="enroll"
                  onClick={() => handlePageClick("registration")}
                >
                  Matricule-se
                </div>
                <div className="sectors">
                  <div className="whatsapp-btn">
                    <img src="whatsapp.png" alt="" />
                  </div>
                  <ul className="sectors-list">
                    <li className="sectors-item">Coord. Ed. Infantil</li>
                    <li className="sectors-item">Coord. Fundamental 1</li>
                    <li className="sectors-item">Coord. Fundamental 2</li>
                    <li className="sectors-item">Coord. Ensino Médio</li>
                    <li className="sectors-item">Financeiro</li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
