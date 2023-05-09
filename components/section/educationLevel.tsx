import EducationLevelItem from "../educationLevelItem";

const EducationLevel = () => {
  const educationLevelList = [
    {
      title: "Ensino Infantil",
      subtitle: "Descobrindo o mundo, tão fantástico",
      url: "kindergaten",
      imageUrl: "school-1.jpg"
    },
    {
      title: "Ensino Fundamental 1",
      subtitle: "Desenvolvendo autonomia e afetividade",
      url: "elementary_school_1",
      imageUrl: "school-2.jpg"
    },
    {
      title: "Ensino Fundamental 2",
      subtitle: "Preparando para a vida",
      url: "elementary_school_2",
      imageUrl: "school-3.jpg"
    },
    {
      title: "Ensino Médio",
      subtitle: "Competência, Disciplina e Desafio.",
      url: "high_school",
      imageUrl: "school-4.jpg"
    },
  ]

  return (
    <div className="education-level">
      <div className="title">
        <h3>Conheça nossos segmentos de Ensino</h3>
      </div>
      <div className="education-level-list">
        {educationLevelList.map((educationLevelItem: any) => (
          <EducationLevelItem key={educationLevelItem.url} educationLevelItem={educationLevelItem} />
        ))}
      </div>
    </div>
  );
};

export default EducationLevel;
