const OpenEnrollment = () => {
  const handlePageClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="open-enrollment">
      <div className="image">
        <img src="enrollment.jpg" alt="" />
      </div>
      <div className="action">
        <div className="title">Matrículas Abertas</div>
        <div
          className="schedule-visit hover:cursor-pointer"
          onClick={() => handlePageClick("schedule_visit")}
        >
          Agende sua Visita
        </div>
      </div>
    </div>
  );
};

export default OpenEnrollment;
