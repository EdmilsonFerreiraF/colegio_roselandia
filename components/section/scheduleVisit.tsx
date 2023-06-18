import Image from "next/image";

const ScheduleVisit = ({
  formDescription,
  scheduleForm,
  sendMail,
  fields,
  handleInput,
}: any) => {
  return (
    <div className="agende-sua-visita">
      <div className="content">
        <div className="btn hover:cursor-pointer registration-schedule-visit">
          <a href="/agende-sua-visita">
            <Image
              width="100"
              height="100"
              className="hover:cursor-pointer"
              src="agende-sua-visita-botao.png"
              alt="colegio roselandia logo"
            />
          </a>
        </div>
        <div className="form-description">
          <div
            dangerouslySetInnerHTML={{
              __html: formDescription,
            }}
          ></div>
        </div>
      </div>
      <div className="form">
        <input
          name="name"
          className="input-text input"
          placeholder="Nome *"
          value={fields["name"]}
          onChange={(e: any) => handleInput(e)}
        />
        <input
          name="email"
          className="input-text input"
          placeholder="Email *"
          value={fields["email"]}
          onChange={(e: any) => handleInput(e)}
        />
        <input
          name="phone"
          className="input-phone input"
          placeholder="+55"
          value={fields["phone"]}
          onChange={(e: any) => handleInput(e)}
        />
        <input
          name="studentName"
          className="input-text input"
          placeholder="Nome do aluno *"
          value={fields["studentName"]}
          onChange={(e: any) => handleInput(e)}
        />
        <input
          name="studentGrade"
          className="input-text input"
          placeholder="Série do aluno *"
          value={fields["studentGrade"]}
          onChange={(e: any) => handleInput(e)}
        />
        <button className="submit-button" onClick={sendMail}>
          Solicitar Agendamento
        </button>
      </div>
    </div>
  );
};

export default ScheduleVisit;
