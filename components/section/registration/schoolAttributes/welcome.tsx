const Welcome = ({ data }: any) => {
  return (
    <div className="welcome">
      <div className="title">{data?.titulo}</div>
      <div className="content">
        <div className="text-1">{data?.texto_1}</div>
        <div className="text-2">{data?.texto_2}</div>
      </div>
    </div>
  );
};

export default Welcome;
