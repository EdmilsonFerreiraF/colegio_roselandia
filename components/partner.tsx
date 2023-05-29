import { baseURL } from "@/constants/baseURL";
import Image from "next/image";

type IProps = {
  partner: any;
};

const Partner = ({ partner }: IProps) => {
  return (
    <div className="partner-item">
      <Image
        src={`${baseURL}/assets/${partner.logo}`}
        alt="parceiro"
        width="100"
        height="100"
      />
    </div>
  );
};

export default Partner;
