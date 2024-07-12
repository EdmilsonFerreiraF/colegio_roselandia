import Link from "next/link";

const FooterStart = ({ phones, hasEnsino }: any) => {
  return (
    <div className="footer-start">
      <ul className="channel-menu">
        <li>Guia do Estudante</li>
        <Link
          href="https://grafiteweb.infocraft.com.br/roselandia"
          target="_blank"
        >
          Portal do Aluno
        </Link>
        <li>
          <Link href="/tv-cr">TV CR</Link>
        </li>
      </ul>
      <ul className="pages-nav">
        {hasEnsino && (
          <li>
            <Link href="#education-level">Ensino</Link>
          </li>
        )}
        <li>
          <Link href="/matricula">Matrícula</Link>
        </li>
        <li>
          <Link href="/projetos">Projetos</Link>
        </li>
        <li>
          <Link href="/contato">Contato</Link>
        </li>
      </ul>
      <ul className="phones">
        <div className="tile">Telefones</div>
        {phones?.map((phone: any) => (
          <li key={phone?.item}>{phone?.item?.numero}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterStart;
