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
            <a href="tel:+557132528954">Fixo : (71) 3252-8954</a>
          </li>
          <li className="sectors-item">
            <a href="https://api.whatsapp.com/send?phone=5571992142717">
              Direção: (71) 99214-2717
            </a>
          </li>
          <li className="sectors-item">
            <a href="https://api.whatsapp.com/send?phone=5571982558908">
              Financeiro:(71) 98255-8908
            </a>
          </li>
          <li className="sectors-item">
            <a href="https://api.whatsapp.com/send?phone=5571992453492">
              Secretaria: (71) 99245-3492
            </a>
          </li>
          <li className="sectors-item">
            <a href="https://api.whatsapp.com/send?phone=5571986104151">
              Infantil: (71) 98610-4151
            </a>
          </li>
          <li className="sectors-item">
            <a href="https://api.whatsapp.com/send?phone=5571983396464">
              Fundamental 1: (71) 98339-6464
            </a>
          </li>
          <li className="sectors-item">
            <a href="https://api.whatsapp.com/send?phone=5571985251921">
              Fundamental 2 :(71) 98525-1921
            </a>
          </li>
          <li className="sectors-item">
            <a href="https://api.whatsapp.com/send?phone=5571987389534">
              Ensino Médio: (71) 98738-9534
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterEnd;
