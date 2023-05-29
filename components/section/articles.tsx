import Article from "../article";

type IProps = {
  data: any;
  variation?: "elementary" | "high";
  secondTextBgColor?: any;
};

const Articles = ({ data, secondTextBgColor }: IProps) => {
  console.log("data", data);

  return (
    <>
      <div className="articles">
        <Article
          data={{
            tituloDentro: data?.titulo_dentro || data?.titulo,
            imagemDentro: data?.imagem_dentro_1 || data?.imagem_1,
            textoDentro: data?.texto_dentro_1 || data?.texto_1,
          }}
          title="Sócio-Interacionista"
        />
        <Article
          data={{
            tituloDentro: data?.titulo_dentro || data?.titulo,
            imagemDentro: data?.imagem_dentro_2 || data?.imagem_2,
            textoDentro: data?.texto_dentro_2 || data?.texto_2,
          }}
          secondTextBgColor={secondTextBgColor}
          variation="colorfulBg"
        />
        <Article
          data={{
            tituloDentro: data?.titulo_dentro || data?.titulo,
            imagemDentro: data?.imagem_dentro_3 || data?.imagem_3,
            textoDentro: data?.texto_dentro_3 || data?.texto_3,
          }}
        />
      </div>
    </>
  );
};

export default Articles;
