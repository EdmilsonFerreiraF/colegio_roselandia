const ScheduleVisit = () => {
  const handlePageClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="agende-sua-visita">
      <div
        className="btn hover:cursor-pointer"
        onClick={() => handlePageClick("schedule_visit")}
      >
        Agende sua Visita
      </div>
      <div className="content">
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
        <input className="input-text" placeholder="Nome *" />
        <input className="input-text" placeholder="Email *" />
        <input className="input-phone" placeholder="+55" />
        <input className="input-text" placeholder="Nome do aluno *" />
        <input className="input-text" placeholder="Série do aluno *" />
        <div className="submit-button">Solicitar Agendamento</div>
      </div>
    </div>
  );
};

export default ScheduleVisit;
