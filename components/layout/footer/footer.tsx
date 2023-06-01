import FooterCenter from "./footerCenter";
import FooterEnd from "./footerEnd";
import FooterStart from "./footerStart";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <FooterStart />
        <FooterCenter />
        <FooterEnd />
      </div>
      <p className="footer-address-mobile">
        Rua Benedita P. dos Santos, Qd. 02, LT. 39, CEP: 42.739-630 - Itinga /
        Lauro de Freitas / BA.
      </p>
    </footer>
  );
};

export default Footer;
