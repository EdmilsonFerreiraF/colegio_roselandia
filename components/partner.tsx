import { baseURL } from "@/constants/baseURL";
import Image from "next/image";
import Link from "next/link";

type IProps = {
  partner: any;
};

const Partner = ({ partner }: IProps) => {
  return (
    <div className="partner-item">
      <Link href={partner.link || ''} target="_blank">
        <Image
          src={`${baseURL}/assets/${partner.logo}`}
          alt="parceiro"
          width="100"
          height="100"
        />
      </Link>
    </div>
  );
};

export default Partner;
