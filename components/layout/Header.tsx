import Image from "next/image";

const Header = () => {
  const handlePageClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <>
      <div className="topbar">
        <div className="topbar-nav">
          <div className="student-guide">Guia do estudante</div>
          <div className="student-portal">Portal do aluno</div>
        </div>
      </div>
      <nav className="navbar">
        <div className="navbar-wrapper">
          <div className="logo">
            <Image
              width="100"
              height="100"
              className="hover:cursor-pointer"
              src="logo.jpg"
              alt="colegio roselandia logo"
              onClick={() => handlePageClick("/")}
            />
          </div>
          <div className="navbar-end">
            <ul className="navbar-menu">
              <li className="navbar-item navbar-item--dropdown hover:cursor-pointer">
                Ensino*
                <ul className="navbar-sub-menu">
                  <li>Infantil</li>
                  <li>Fundamental</li>
                </ul>
              </li>
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
    </>
  );
};

export default Header;
