import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
            <img src="contato.jpg" alt="" />
          </div>
          <div className="form">
            <div className="form-control">
              <label htmlFor="name" className="label">
                Nome
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
            <div className="form-control">
              <label htmlFor="name" className="label">
                Mensagem
              </label>
              <textarea className="input-textarea input"></textarea>
            </div>
            <div className="form-actions">
              <div className="captcha"></div>
              <button className="schedule-visit-button">Agendar Visita</button>
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
}
