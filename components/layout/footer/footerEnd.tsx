import Image from "next/image";
import Link from "next/link";
import FooterSocialMedia from "./footerSocialMedia";

const FooterEnd = () => {
  return (
    <div className="footer-end">
      <ul className="social-medias">
        <FooterSocialMedia
          link="https://www.instagram.com/colegio.roselandia"
          media="instagram"
        />
        <FooterSocialMedia
          link="https://www.youtube.com/@redecrdecomunicacao1900"
          media="youtube"
        />
        <FooterSocialMedia
          link="https://www.facebook.com/c.roselandia"
          media="facebook"
        />
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
          <li className="sectors-item">
            <a href="tel:+5571986104151">Coord. Ed. Infantil</a>
          </li>
          <li className="sectors-item">
            <a href="tel:+5571983396464">Coord. Fundamental 1</a>
          </li>
          <li className="sectors-item">
            <a href="tel:+5571985251921">Coord. Fundamental 2</a>
          </li>
          <li className="sectors-item">
            <a href="tel:+5571987389534">Coord. Ensino Médio</a>
          </li>
          <li className="sectors-item">
            <a href="tel:+5571982558908">Financeiro</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterEnd;
