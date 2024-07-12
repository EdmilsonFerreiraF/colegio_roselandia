import { baseURL } from "@/constants/baseURL";
import { ReCaptcha } from "next-recaptcha-v3";
import Image from "next/image";
import Link from "next/link";

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
        <ReCaptcha onValidate={setToken} action="page_view" />
        <div className="schedule-visit hover:cursor-pointer">
          <Link href="/agende-sua-visita">Agende sua Visita</Link>
        </div>
      </div>
    </div>
  );
};

export default OpenEnrollment;
