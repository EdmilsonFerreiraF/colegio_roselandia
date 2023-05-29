import { baseURL } from "@/constants/baseURL";
import { ReCaptcha } from "next-recaptcha-v3";
import Image from "next/image";

const OpenEnrollment = ({ data }: any) => {
  const setToken = () => {};

  return (
    <div className="open-enrollment">
      <div className="image">
        <Image
          width="100"
          height="100"
          src={`${baseURL}/assets/${data.imagem}`}
          alt="matricula"
        />
      </div>
      <div className="action">
        <div className="title">{data.titulo}</div>
        {/* <Reaptcha sitekey="6LffL0kmAAAAAMnz1qUKGG0Mn8dJfino8D27yFT0" /> */}
        <ReCaptcha onValidate={setToken} action="page_view" />
        <div className="schedule-visit hover:cursor-pointer">
          <a href="/agende-sua-visita">Agende sua Visita</a>
        </div>
      </div>
    </div>
  );
};

export default OpenEnrollment;
