import Image from "next/image";
import Link from "next/link";

const NavbarMobile = () => {
  return (
    <div className="navbar-mobile">
      <div className="logo">
        <Link href="/">
          <Image
            width="100"
            height="100"
            className="hover:cursor-pointer"
            src="logo.jpg"
            alt="colegio roselandia logo"
          />
        </Link>
      </div>
      <div className="navbar-schedule-button">
        {/* <div className="cutted-side"></div> */}
        <div className="btn hover:cursor-pointer">
          <a href="/agende-sua-visita">
            <Image
              width="100"
              height="100"
              className="hover:cursor-pointer"
              src="header-schedule-visit.jpg"
              alt="colegio roselandia logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
