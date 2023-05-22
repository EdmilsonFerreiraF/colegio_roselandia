import Image from "next/image";

const OurHistory = () => {
  return (
    <div className="our-history">
      <div className="title-subtitle">
        <div className="title">
          <h3>Nossa história - 30 anos</h3>
        </div>
        <div className="subtitle">
          <p>
            Originou-se em 1993 com o nome Banca da Tia Rosinha, tinha o
            objetivo de auxiliar as crianças com as tarefas escolares e melhorar
            o aprendizado das mesmas, oferecendo apenas as séries iniciais e
            Pré-Escola. O Colégio nasceu de um sonho de uma jovem, iniciado na
            cozinha da mãe o desejo e a necessidade de trabalhar para ajudar a
            família. A professora fudnadora Rosângela Santos (Pró Rosa), que
            vislumbrava um ideal de educação onde a integração entre a Escola e
            A família constitui o pilar básico na formação do indivíduo social.
          </p>
          <div className="down-arrow-icon"></div>
        </div>
      </div>
      <div className="video">
        <Image width="100" height="100" src="our-history-youtube.jpg" alt="" />
      </div>
    </div>
  );
};

export default OurHistory;
