import Image from "next/image";
import Link from "next/link";

const FooterSocialMedia = ({ link, media }: any) => {
  return (
    <li className="social-medias-item">
      <Link href={link} target="_blank">
        <Image
          width="50"
          height="50"
          className={`${media}-logo`}
          src={`${media}.png`}
          alt={`${media} logo`}
        />
      </Link>
    </li>
  );
};

export default FooterSocialMedia;
