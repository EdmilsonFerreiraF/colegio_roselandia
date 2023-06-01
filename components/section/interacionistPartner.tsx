import { baseURL } from "@/constants/baseURL";
import Image from "next/image";
import Link from "next/link";

const InteracionistPartner = ({ imagem }: any) => {
  return (
    <div className="interacionist-partner">
      <Link href="/socio-interacionista">
        <Image
          width="100"
          height="100"
          src={`${baseURL}/assets/${imagem}`}
          alt=""
        />
      </Link>
    </div>
  );
};

export default InteracionistPartner;
