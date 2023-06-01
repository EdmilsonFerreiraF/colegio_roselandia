import NavbarEnd from "./navbarEnd";
import NavbarLogo from "./navbarLogo";
import NavbarMobile from "./navbarMobile";
import NavbarTop from "./navbarTop";

const Header = () => {
  return (
    <>
      <div className="topbar">
        <NavbarTop />
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
