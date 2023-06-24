import NavbarEnd from "./navbarEnd";
import NavbarLogo from "./navbarLogo";
import NavbarMobile from "./navbarMobile";
import NavbarTop from "./navbarTop";

const Header = ({ studentGuide }: any) => {
  return (
    <>
      <div className="topbar">
        <NavbarTop studentGuide={studentGuide} />
      </div>
      <nav className="navbar">
        <div className="navbar-wrapper">
          <NavbarLogo />
          <NavbarEnd />
          <NavbarMobile />
        </div>
      </nav>
    </>
  );
};

export default Header;
