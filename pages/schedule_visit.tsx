import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handlePageClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <main
      className={`schedule-visit flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="container index">
        <div className="topbar">
          <div className="topbar-nav">
            <div className="student-guide">Guia do estudante</div>
            <div className="student-portal">Portal do aluno</div>
          </div>
        </div>
        <nav className="navbar">
          <div className="navbar-wrapper">
            <div className="logo">
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
            <img src="agende-visita.jpg" alt="" />
          </div>
          <div className="form">
            <div className="form-control">
              <label htmlFor="name" className="label">
                Nome do Aluno
              </label>
              <input type="text" className="input" />
            </div>
            <div className="form-control">
              <label htmlFor="name" className="label">
                Nome do Responsável
              </label>
              <input type="text" className="input" />
            </div>
            <div className="form-control">
              <label htmlFor="name" className="label">
                E-mail do Responsável
              </label>
              <input type="text" className="input" />
            </div>
            <div className="form-control">
              <label htmlFor="name" className="label">
                Tel / Whatsapp do Responsável
              </label>
              <input type="text" className="input" />
            </div>
            <div className="form-actions">
              <div className="captcha"></div>
              <button className="schedule-visit-button">Agendar Visita</button>
            </div>
          </div>
          <div className="education-level">
            <div className="title">Conheça nossos segmentos de Ensino</div>
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
                <div className="enroll">Matricule-se</div>
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
