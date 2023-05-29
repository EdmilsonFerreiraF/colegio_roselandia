import ScheduleButton from "@/components/scheduleButton";
import FormControl from "../formControl";
import { useEffect, useRef, useState } from "react";
import Reaptcha from "reaptcha";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [verified, setVerified] = useState(false);
  let captchaRef = useRef(null);
  const [ready, setReady] = useState(false)

  const onVerify = (recaptchaResponse: any) => {
    setVerified(true);
  };

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

  const resetCaptcha = (e: any) => {
    e.reset();
  };

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
      <FormControl name="name" label="Nome" />
      <FormControl name="responsible_email" label="E-mail do Responsável" />
      <FormControl
        name="responsible_phone"
        label="Tel / Whatsapp do Responsável"
      />
      <FormControl name="message" label="Mensagem" />
      <div className="form-actions">
          <ReCAPTCHA
            ref={captchaRef}
            // @ts-ignore
            // ref={(e) => resetCaptcha(e)}
            // explicit
            onChange={onReCAPTCHAChange}
            sitekey="6LffL0kmAAAAAMnz1qUKGG0Mn8dJfino8D27yFT0"
          />
        <ScheduleButton />
      </div>
    </div>
  );
};

export default ContactForm;
