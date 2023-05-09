import React from "react";

type IProps = {
  educationLevelItem: any;
};

const EducationLevelItem = ({ educationLevelItem }: IProps) => {
  const handlePageClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div
      className="education-level-item hover:cursor-pointer"
      onClick={() => handlePageClick(educationLevelItem.url)}
    >
      <div className="title-container">
        <div className="title">{educationLevelItem.title}</div>
        <div className="subtitle">
          {educationLevelItem.subtitle}
          <span className="more-btn">Mais{">>"}</span>
        </div>
      </div>
      <div className="image">
        <img src={educationLevelItem.imageUrl} alt="" />
      </div>
    </div>
  );
};

export default EducationLevelItem;
