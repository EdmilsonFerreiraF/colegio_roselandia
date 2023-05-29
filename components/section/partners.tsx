import Partner from "../partner";

const Partners = ({ data }: any) => {
  return (
    <div className="partners">
      <div className="title">
        <h3>Parceiros</h3>
      </div>
      <div className="partners-list">
        {data.map((partner: any) => (
          <Partner key={partner.logo} partner={partner} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
