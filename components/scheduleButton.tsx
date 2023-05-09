const ScheduleButton = () => {
  const handlePageClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <button
      className="schedule-visit-button"
      onClick={() => handlePageClick("/schedule_visit")}
    >
      Agendar Visita
    </button>
  );
};

export default ScheduleButton;
