import Image from "next/image";
import Article from "../article";
import EducationNav from "../educationNav";

type IProps = {
  variation?: "elementary" | "high";
};

const Articles = ({ variation = "elementary" }: IProps) => {
  return (
    <>
      <div className="articles">
        <Article title="Sócio-Interacionista" />
        <Article variation="colorfulBg" />
        <Article variation="educationNav" />
      </div>
    </>
  );
};

export default Articles;
