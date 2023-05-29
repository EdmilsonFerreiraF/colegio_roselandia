const ScheduleVisit = () => {
  return (
    <div className="agende-sua-visita">
      <div className="content">
        <div className="btn hover:cursor-pointer">
          <a href="/agende-sua-visita">Agende sua Visita</a>
        </div>
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div className="form">
        <input className="input-text input" placeholder="Nome *" />
        <input className="input-text input" placeholder="Email *" />
        <input className="input-phone input" placeholder="+55" />
        <input className="input-text input" placeholder="Nome do aluno *" />
        <input className="input-text input" placeholder="Série do aluno *" />
        <button className="submit-button">Solicitar Agendamento</button>
      </div>
    </div>
  );
};

export default ScheduleVisit;
