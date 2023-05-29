import ReCAPTCHA from "react-google-recaptcha";
import FormControl from "./formControl";

const ScheduleForm = () => {
  return (
    <div className="form">
      <FormControl name="student_name" label="Nome do Aluno" />
      <FormControl name="responsible_name" label="Nome do Responsável" />
      <FormControl name="responsible_email" label="E-mail do Responsável" />
      <FormControl
        name="responsible_phone"
        label="Tel / Whatsapp do Responsável"
      />
      <div className="form-actions">
        <ReCAPTCHA sitekey="6LffL0kmAAAAAMnz1qUKGG0Mn8dJfino8D27yFT0" />
        <button className="schedule-visit-button">Agendar Visita</button>
      </div>
    </div>
  );
};

export default ScheduleForm;
