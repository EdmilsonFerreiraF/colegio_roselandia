import Image from "next/image";
import Link from "next/link";
import FooterSocialMedia from "./footerSocialMedia";

const FooterEnd = ({ phones }: any) => {
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
          {phones?.map((phone: any) => (
            <li key={phone?.item?.numero} className="sectors-item">
              <a href={phone?.item?.link} target="_blank">
                {phone?.item?.numero}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterEnd;
