import EducationLevelItem from "../educationLevelItem";

type IProps = {
  indexPage?: boolean;
  data: any;
};

const EducationLevel = ({ indexPage, data }: IProps) => {
  return (
    <div className="education-level" id="education-level">
      {!indexPage && (
        <div className="title">
          <h3>Conheça nossos segmentos de Ensino</h3>
        </div>
      )}
      <div className="education-level-list">
        {data.map((educationLevelItem: any) => (
          <EducationLevelItem
            key={educationLevelItem.url}
            educationLevelItem={educationLevelItem}
          />
        ))}
      </div>
    </div>
  );
};

export default EducationLevel;
