import Image from "next/image";

const FooterSocialMedia = ({ link, media }: any) => {
  return (
    <li className="social-medias-item">
      <a href={link}>
        <Image
          width="50"
          height="50"
          className={`${media}-logo`}
          src={`${media}.png`}
          alt={`${media} logo`}
        />
      </a>
    </li>
  );
};

export default FooterSocialMedia;
