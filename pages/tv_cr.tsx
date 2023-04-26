import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Projects = () => {
  return (
    <main
      className={`tv-cr flex min-h-screen flex-col items-center justify-between ${inter.className}`}
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
              <img src="logo.jpg" alt="" />
            </div>
            <div className="navbar-end">
              <ul className="navbar-menu">
                <li className="navbar-item">Ensino*</li>
                <li className="navbar-item">Matrículas*</li>
                <li className="navbar-item">Projetos</li>
                <li className="navbar-item">Contato*</li>
              </ul>
              <div className="schedule-button">
                <div className="cutted-side"></div>
                <div className="btn">Agende sua Visita</div>
              </div>
            </div>
          </div>
        </nav>
        <div className="main">
          <div className="hero">
            <img src="hero.jpg" alt="" />
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
            <div className="movies">
              <div className="category">
                <div className="title">
                  <span className="upper">Mostra</span> de
                  <span className="upper">Filmes cr7</span> - 2022
                </div>
                <div className="movie">
                  <div className="image">
                    <img src="tv-cr-video-1.jpg" alt="" />
                  </div>
                  <div className="image">
                    <img src="tv-cr-video-1.jpg" alt="" />
                  </div>
                </div>
                <div className="movie">
                  <div className="image">
                    <img src="tv-cr-video-2.png" alt="" />
                  </div>
                  <div className="image">
                    <img src="tv-cr-video-2.png" alt="" />
                  </div>
                </div>
                <div className="movie">
                  <div className="image">
                    <img src="tv-cr-video-3.png" alt="" />
                  </div>
                  <div className="image">
                    <img src="tv-cr-video-3.png" alt="" />
                  </div>
                </div>
                <div className="movie">
                  <div className="image">
                    <img src="tv-cr-video-4.png" alt="" />
                  </div>
                  <div className="image">
                    <img src="tv-cr-video-4.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="open-enrollment">
            <div className="image">
              <img src="enrollment.jpg" alt="" />
            </div>
            <div className="action">
              <div className="title">Matrículas Abertas</div>
              <div className="schedule-visit">Agende sua Visita</div>
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
};

export default Projects;
