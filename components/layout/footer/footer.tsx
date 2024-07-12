import Link from "next/link";
import FooterCenter from "./footerCenter";
import FooterEnd from "./footerEnd";
import FooterStart from "./footerStart";

type IProps = {
  phonesStart: any;
  phonesEnd: any;
  address: any;
  hasEnsino?: boolean | null;
};

const Footer = ({ phonesStart, phonesEnd, address, hasEnsino }: IProps) => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <FooterStart phones={phonesStart} hasEnsino={hasEnsino} />
        <FooterCenter address={address} />
        <FooterEnd phones={phonesEnd} />
      </div>
      <p className="footer-address-mobile">
        <Link
          href="https://www.google.com/maps/place/Col%C3%A9gio+Rosel%C3%A2ndia+-+Anexo/@-12.889822,-38.3487518,17z/data=!3m1!4b1!4m6!3m5!1s0x71617345e3f8f5f:0x47c9ce77797336d1!8m2!3d-12.889822!4d-38.3487518!16s%2Fg%2F11fklxk754?entry=ttu"
          target="_blank"
        >
          Rua Benedita P. dos Santos, Qd. 02, LT. 39, CEP: 42.739-630 - Itinga /
          Lauro de Freitas / BA.
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
