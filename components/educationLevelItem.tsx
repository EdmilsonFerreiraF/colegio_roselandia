import { baseURL } from "@/constants/baseURL";
import Image from "next/image";
import Link from "next/link";

type IProps = {
  educationLevelItem: any;
};

const EducationLevelItem = ({ educationLevelItem }: IProps) => {
  return (
    <div className="education-level-item hover:cursor-pointer">
      <Link href={`/${educationLevelItem.slug}`}>
        <div className="title-container">
          <div className="title">{educationLevelItem.titulo}</div>
          <div className="subtitle">
            {educationLevelItem.subtitulo}
            <span className="more-btn">Mais{">>"}</span>
          </div>
        </div>
        <div className="image">
          <Image
            width="642"
            height="323"
            src={`${baseURL}/assets/${educationLevelItem.imagem}`}
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default EducationLevelItem;
