import Image from "next/image";
import Link from "next/link";

const NavbarLogo = () => {
  return (
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
  );
};

export default NavbarLogo;
