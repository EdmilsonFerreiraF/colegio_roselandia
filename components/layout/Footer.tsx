// @ts-nocheck
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-start">
          <ul className="channel-menu">
            <li>Guia do Estudante</li>
            <a
              href="https://grafiteweb.infocraft.com.br/roselandia"
              target="_blank"
            >
              Portal do Aluno
            </a>
            <li>
              <Link href="/tv-cr">TV CR</Link>
            </li>
          </ul>
          <ul className="pages-nav">
            <li>
              <a href="#education-level">Ensino</a>
            </li>
            <li>
              <Link href="/matricula">Matrícula</Link>
            </li>
            <li>
              <Link href="/projetos">Projetos</Link>
            </li>
            <li>
              <a href="/contato">Contato</a>
            </li>
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
              <a href="https://www.instagram.com/colegio.roselandia">
                <Image
                  width="1"
                  height="2"
                  className="instagram-logo"
                  src="instagram.png"
                  alt="instagram logo"
                />
              </a>
            </li>
            <li className="social-medias-item">
              <a href="https://www.youtube.com/@redecrdecomunicacao1900">
                <Image
                  width="50"
                  height="50"
                  className="youtube-logo"
                  src="youtube.png"
                  alt="youtube logo"
                />
              </a>
            </li>
            <li className="social-medias-item">
              <a href="https://www.facebook.com/c.roselandia">
                <Image
                  width="100"
                  height="100"
                  className="facebook-logo"
                  src="facebook.png"
                  alt="facebook logo"
                />
              </a>
            </li>
          </ul>
          <div className="enroll">
            <Link href="/matricula">Matricule-se</Link>
          </div>
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
