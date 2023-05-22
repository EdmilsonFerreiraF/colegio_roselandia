import Image from "next/image";

const OpenEnrollment = () => {
  const handlePageClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="open-enrollment">
      <div className="image">
        <Image width="100" height="100" src="enrollment.jpg" alt="matricula" />
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
