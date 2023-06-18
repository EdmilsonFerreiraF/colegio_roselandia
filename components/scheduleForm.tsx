import ReCAPTCHA from "react-google-recaptcha";
import FormControl from "./formControl";

const ScheduleForm = ({ fields, setFields, sendMail, handleChange }: any) => {
  return (
    <div className="form">
      <FormControl
        name="studentName"
        handleChange={handleChange}
        label="Nome do Aluno"
        value={fields["studentName"]}
      />
      <FormControl
        name="responsibleName"
        handleChange={handleChange}
        label="Nome do Responsável"
        value={fields["responsibleName"]}
      />
      <FormControl
        name="responsibleEmail"
        handleChange={handleChange}
        label="E-mail do Responsável"
        value={fields["responsibleEmail"]}
      />
      <FormControl
        value={fields["responsiblePhone"]}
        name="responsiblePhone"
        handleChange={handleChange}
        label="Tel / Whatsapp do Responsável"
      />
      <div className="form-actions">
        <ReCAPTCHA sitekey="6LffL0kmAAAAAMnz1qUKGG0Mn8dJfino8D27yFT0" />
        <button className="schedule-visit-button" onClick={sendMail}>
          Agendar Visita
        </button>
      </div>
    </div>
  );
};

export default ScheduleForm;
