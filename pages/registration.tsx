import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Kindergaten = () => {
  return (
    <main
      className={`registration flex min-h-screen flex-col items-center justify-between ${inter.className}`}
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
              <img className="logo" src="logo.jpg" alt="" />
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
          <div className="image-title">
            <p>Matrícula alunos novos 2023</p>
            <img src="matricula-novos.jpg" alt="" />
          </div>
          <div className="registration">
            <div className="topics">
              <div className="welcome">
                <div className="title">
                  Sejam Bem-Vindos ao Colégio Roselândia
                </div>
                <div className="content">
                  <div className="text-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </div>
                  <div className="text-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                  </div>
                </div>
              </div>
              <div className="roseland-family">
                <div className="title">Família Roselândia</div>
                <div className="content">
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                  </div>
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </div>
              </div>
              <div className="innovative-teaching">
                <div className="title">Ensino Inovador</div>
                <div className="content">
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                  </div>
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </div>
              </div>
              <div className="acolhimento">
                <div className="title">Acolhimento</div>
                <div className="content">
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="agende-sua-visita">
            <div className="btn">Agende sua Visita</div>
            <div className="content">
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
            <div className="form">
              <input className="input-text" placeholder="Nome *" />
              <input className="input-text" placeholder="Email *" />
              <input className="input-phone" placeholder="+55" />
              <input className="input-text" placeholder="Nome do aluno *" />
              <input className="input-text" placeholder="Série do aluno *" />
              <div className="submit-button">Solicitar Agendamento</div>
            </div>
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
              <div className="schedule-visit">Agende sua Visita</div>
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

export default Kindergaten;
