import Partner from "../partner";

const Partners = () => {
  const parners = [
    {
      imageUrl: "partner-1.jpg",
    },
    {
      imageUrl: "partner-2.jpg",
    },
    {
      imageUrl: "partner-3.jpg",
    },
    {
      imageUrl: "partner-4.jpg",
    },
    {
      imageUrl: "partner-5.jpg",
    },
  ];

  return (
    <div className="partners">
      <div className="title">
        <h3>Parceiros</h3>
      </div>
      <div className="partners-list">
        {parners.map((partner: any) => (
          <Partner key={partner.imageUrl} partner={partner} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
