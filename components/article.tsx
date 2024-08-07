import { baseURL } from "@/constants/baseURL";
import Image from "next/image";
import { useEffect, useState } from "react";

type IProps = {
  data: any;
  variation?: "normal" | "colorfulBg" | "educationNav";
  title?: string;
  secondTextBgColor?: "#06706c" | "#5867cc" | "#0b3503" | "unset";
};

const Article = ({
  data,
  variation = "normal",
  title,
  secondTextBgColor,
}: IProps) => {
  const [textoDentro, setTextoDentro] = useState("");

  useEffect(() => {
    setTextoDentro(data.textoDentro);
  }, [data]);

  return (
    <div
      style={{
        background: secondTextBgColor,
      }}
      className={`article ${
        variation === "colorfulBg" ? "article--colorful-bg" : ""
      }`}
    >
      <div
        style={{
          order: variation === "colorfulBg" ? (1 as any) : null,
        }}
        className="image"
      >
        <Image
          width="100"
          height="100"
          src={`${baseURL}/assets/${data?.imagemDentro}`}
          alt="ensino infantil"
        />
      </div>
      {variation === "educationNav" && (
        <button className="agende-sua-visita"></button>
      )}
      <div className="text">
        {title && <h3 className="article-title">{data?.tituloDentro}</h3>}
        <div className="article-text mb-5">
          {" "}
          <div
            dangerouslySetInnerHTML={{
              __html: textoDentro,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Article;
