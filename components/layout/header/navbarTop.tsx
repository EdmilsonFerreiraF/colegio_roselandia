import { baseURL } from "@/constants/baseURL";
import Link from "next/link";

const NavbarTop = ({ studentGuide }: any) => {
  return (
    <div className="topbar-nav">
      <Link
        className="student-guide"
        href={`${baseURL}/assets/${studentGuide}.pdf`}
        target="_blank"
      >
        Guia do Estudante
      </Link>
      <li className="student-portal">
        <Link
          href="https://grafiteweb.infocraft.com.br/roselandia"
          target="_blank"
        >
          Portal do Aluno
        </Link>
      </li>
    </div>
  );
};

export default NavbarTop;
