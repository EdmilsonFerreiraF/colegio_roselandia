import { baseURL } from "@/constants/baseURL";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import useSWR from "swr";

export const AppContext = createContext({}) as any;

const AppProvider = ({ children }: any) => {
  const [pagesData, setPagesData] = useState<any>([]);

  const fetcher = (url: any) =>
    axios.get(url).then((res) => {
      console.log("res", res.data);

      return res.data;
    });

  const { data, error, isLoading } = useSWR(
    `${baseURL}/items/paginas?fields=titulo,slug,blocos.item.carrossel.item:carrossel_imagem.imagem,blocos.item.ensinos.item:ensino.*,blocos.item.projetos.item:projeto.*,blocos.item.nossa_historia.item*, blocos.item.*,blocos.item.parceiros.item.*,blocos.item.interacionist_partner.item.*,blocos.item.atributos_escola.item.*,blocos.item.ensinos.*,blocos.item.projetos.*,blocos.item.atributo_escola.*,blocos.item.ensinos.item:projetos_ensino*.*,blocos.item.ensinos.item:projetos_ensino.projetos.item.*`,
    fetcher
  );

  useEffect(() => {
    const getPages = async () => {
      const res = await axios
        .get(
          `${baseURL}/items/paginas?fields=titulo,slug,blocos.item.carrossel.item:carrossel_imagem.*,blocos.item.carrossel.item:carrossel_imagem.hero_legenda.*,blocos.item.ensinos.item:ensino.*,blocos.item.projetos.item:projeto.*,blocos.item.nossa_historia.item*, blocos.item.*,blocos.item.parceiros.item.*,blocos.item.interacionist_partner.item.*,blocos.item.atributos_escola.item.*,blocos.item.ensinos.*,blocos.item.projetos.*,blocos.item.atributo_escola.*,blocos.item.ensinos.item:projetos_ensino.projetos.item.*,blocos.item.ensinos.item:projetos_ensino.titulo,blocos.item.projetos_tvcr.item.*,blocos.item.projetos_tvcr.item.videos.*,blocos.item.projetos_tvcr.item.*,blocos.item.projetos_tvcr.item.videos.item.*`
        )
        .then((res: any) => {
          console.log("res", res);

          setPagesData(res.data);
          return res.data;
        });

      setPagesData(res.data);
      console.log("res", res);

      return res;
    };

    const pages = getPages();
    console.log("pages", pages);
  }, []);

  return (
    <AppContext.Provider value={{ isLoadingData: isLoading, pagesData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
