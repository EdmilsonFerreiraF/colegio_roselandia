const RoselandiaFamily = ({ data }: any) => {
  return (
    <div className="roseland-family">
      <div className="title">{data?.titulo}</div>
      <div className="content">
        <div className="text">{data?.texto_1}</div>
        <div className="text">{data?.texto_2}</div>
      </div>
    </div>
  );
};

export default RoselandiaFamily;
