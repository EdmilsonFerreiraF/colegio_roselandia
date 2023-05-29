import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="topbar">
        <div className="topbar-nav">
          <div className="student-guide">Guia do Estudante</div>
          <li className="student-portal">
            <a
              href="https://grafiteweb.infocraft.com.br/roselandia"
              target="_blank"
            >
              Portal do Aluno
            </a>
          </li>
        </div>
      </div>
      <nav className="navbar">
        <div className="navbar-wrapper">
          <div className="logo">
            <Link href="/">
              <Image
                width="100"
                height="100"
                className="hover:cursor-pointer"
                src="logo.jpg"
                alt="colegio roselandia logo"
              />
            </Link>
          </div>
          <div className="navbar-end">
            <ul className="navbar-menu">
              <li className="navbar-item navbar-item--dropdown hover:cursor-pointer">
                Ensino*
                <ul className="navbar-sub-menu">
                  <li>
                    <Link href="/kindergaten">Infantil</Link>
                  </li>
                  <li>
                    <Link href="/elementary-school-1">Fundamental 1</Link>
                  </li>
                  <li>
                    <Link href="/elementary-school-2">Fundamental 2</Link>
                  </li>
                  <li>
                    <Link href="/high-school">Médio</Link>
                  </li>
                </ul>
              </li>
              <li className="navbar-item navbar-item--dropdown hover:cursor-pointer">
                Matrículas*
                <ul
                  style={{
                    left: "-13px",
                  }}
                  className="navbar-sub-menu"
                >
                  <li>
                    <Link href="/registration">Nova</Link>
                  </li>
                  <li>
                    <Link href="/reregistration">Rematrícula</Link>
                  </li>
                </ul>
              </li>
              <li className="navbar-item hover:cursor-pointer">
                <Link href="/projects">Projetos</Link>
              </li>
              <li className="navbar-item navbar-item--dropdown hover:cursor-pointer">
                Contato
                <ul className="navbar-sub-menu">
                  <li>
                    <a href="/contact">Contato</a>
                  </li>
                  <li>
                    <Link href="/work-with-us">Trabalhe Conosco</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="schedule-button">
              <div className="cutted-side"></div>
              <div className="btn hover:cursor-pointer">
                <a href="/schedule-visit">Agende sua Visita</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
