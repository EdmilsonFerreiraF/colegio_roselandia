import Image from "next/image";

const Footer = () => {
  return (
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
            Rua Benedita P. dos Santos, Qd. 02, LT. 39, CEP: 42.739-630 - Itinga
            / Lauro de Freitas / BA.
          </p>
        </div>
        <div className="footer-end">
          <ul className="social-medias">
            <li className="social-medias-item">
              <Image
                width="100"
                height="100"
                src="instagram.png"
                alt="instagram logo"
              />
            </li>
            <li className="social-medias-item">
              <Image
                width="100"
                height="100"
                src="youtube.png"
                alt="youtube logo"
              />
            </li>
            <li className="social-medias-item">
              <Image
                width="100"
                height="100"
                src="facebook.png"
                alt="facebook logo"
              />
            </li>
          </ul>
          <div className="enroll">Matricule-se</div>
          <div className="sectors">
            <div className="whatsapp-btn">
              <Image
                width="100"
                height="100"
                src="whatsapp.png"
                alt="whatsapp logo"
              />
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
  );
};

export default Footer;
