import { useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import FormControl from "../formControl";

const ContactForm = ({ fields, handleInput, sendMail }: any) => {
  let captchaRef = useRef(null);

  useEffect(() => {
    try {
      // @ts-ignore
      captchaRef.current.render("1", {
        sitekey: "6LffL0kmAAAAAMnz1qUKGG0Mn8dJfino8D27yFT0",
        badge: "att",
        size: "att",
        tabindex: 0,
        callback: function (token: any) {
          //..
        },
        "expired-callback": function () {
          //...
        },
        "error-callback": function () {
          //...
        },
        isolated: false,
      });
    } catch (error) {}
    console.log("captchaRef", captchaRef);
    // @ts-ignore
    if (captchaRef.current.rendered) captchaRef.current.reset();
  }, []);

  const onReCAPTCHAChange = (captchaCode: any) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) {
      return;
    }
    // Else reCAPTCHA was executed successfully so proceed with the
    // alert
    // Reset the reCAPTCHA so that it can be executed again if user
    // submits another email.
    // @ts-ignore
    captchaRef.current.reset();
  };

  return (
    <div className="form">
      <FormControl
        name="name"
        value={fields["name"]}
        label="Nome"
        handleChange={handleInput}
      />
      <FormControl
        name="responsibleEmail"
        value={fields["responsibleEmail"]}
        label="E-mail do Responsável"
        handleChange={handleInput}
      />
      <FormControl
        name="responsiblePhone"
        value={fields["responsiblePhone"]}
        label="Tel / Whatsapp do Responsável"
        handleChange={handleInput}
      />
      <FormControl
        name="message"
        value={fields["message"]}
        label="Mensagem"
        handleChange={handleInput}
      />
      <div className="form-actions">
        <ReCAPTCHA
          ref={captchaRef}
          // @ts-ignore
          // ref={(e) => resetCaptcha(e)}
          // explicit
          onChange={onReCAPTCHAChange}
          sitekey="6LffL0kmAAAAAMnz1qUKGG0Mn8dJfino8D27yFT0"
        />
        <button
          className="schedule-visit-button"
          onClick={sendMail}
        >
          Agendar Visita
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
