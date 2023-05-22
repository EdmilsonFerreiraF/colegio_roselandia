import Image from "next/image";
import EducationNav from "./educationNav";

type IProps = {
  variation?: "normal" | "colorfulBg" | "educationNav";
  title?: string;
};

const Article = ({ variation = "normal", title }: IProps) => {
  return (
    <div
      className={`article ${
        variation === "colorfulBg" ? "article--colorful-bg" : ""
      }`}
    >
      <div className="image">
        <Image
          width="100"
          height="100"
          src="/ensino-infantil-2.jpg"
          alt="ensino infantil"
        />
      </div>
      {variation === "educationNav" && (
        <button className="agende-sua-visita"></button>
      )}
      <div className="text">
        {title && <h3 className="article-title">{title}</h3>}
        <p className="article-text mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam augue
          dui, vestibulum ac semper eget, facilisis a neque. Integer
          sollicitudin nisi nibh, non facilisis metus sodales a. Aenean sed
          augue ultricies, maximus velit sodales, facilisis urna. Phasellus non
          lacinia nunc. Donec efficitur lorem nunc, vitae fringilla urna
          malesuada et. Maecenas id mattis est. Praesent auctor lacus in arcu
          suscipit, a gravida ex consectetur. Curabitur porttitor volutpat
          rutrum. Sed id ligula ut nisi imperdiet dignissim et eget sem.
        </p>
        <p className="article-text">
          Praesent a est a sapien dapibus iaculis id in ipsum. Ut facilisis id
          elit et venenatis. Etiam eget viverra sem. Nullam consectetur euismod
          leo eget gravida. Sed in imperdiet velit. Aenean dictum dapibus
          fringilla.
        </p>
        {variation === "educationNav" && <EducationNav />}
      </div>
    </div>
  );
};

export default Article;
