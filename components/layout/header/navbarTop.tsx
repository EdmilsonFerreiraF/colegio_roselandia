import { baseURL } from "@/constants/baseURL";

const NavbarTop = ({ studentGuide }: any) => {
  return (
    <div className="topbar-nav">
      <a
        className="student-guide"
        href={`${baseURL}/assets/${studentGuide}.pdf`}
        target="_blank"
      >
        Guia do Estudante
      </a>
      <li className="student-portal">
        <a
          href="https://grafiteweb.infocraft.com.br/roselandia"
          target="_blank"
        >
          Portal do Aluno
        </a>
      </li>
    </div>
  );
};

export default NavbarTop;
