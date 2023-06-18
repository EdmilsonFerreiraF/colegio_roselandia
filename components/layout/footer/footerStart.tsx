import Link from "next/link";

const FooterStart = ({ hasEnsino }: any) => {
  return (
    <div className="footer-start">
      <ul className="channel-menu">
        <li>Guia do Estudante</li>
        <a
          href="https://grafiteweb.infocraft.com.br/roselandia"
          target="_blank"
        >
          Portal do Aluno
        </a>
        <li>
          <Link href="/tv-cr">TV CR</Link>
        </li>
      </ul>
      <ul className="pages-nav">
        {hasEnsino && (
          <li>
            <a href="#education-level">Ensino</a>
          </li>
        )}
        <li>
          <Link href="/matricula">Matrícula</Link>
        </li>
        <li>
          <Link href="/projetos">Projetos</Link>
        </li>
        <li>
          <a href="/contato">Contato</a>
        </li>
      </ul>
      <ul className="phones">
        <div className="tile">Telefones</div>
        <li>(71) 3252-8954</li>
      </ul>
    </div>
  );
};

export default FooterStart;
