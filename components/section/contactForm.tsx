import ScheduleButton from "@/components/scheduleButton";
import FormControl from "../formControl";

const ContactForm = () => {
  return (
    <div className="form">
      <FormControl name="name" label="Nome" />
      <FormControl name="responsible_email" label="E-mail do Responsável" />
      <FormControl
        name="responsible_phone"
        label="Tel / Whatsapp do Responsável"
      />
      <FormControl name="message" label="Mensagem" />
      <div className="form-actions">
        <div className="captcha"></div>
        <ScheduleButton />
      </div>
    </div>
  );
};

export default ContactForm;
