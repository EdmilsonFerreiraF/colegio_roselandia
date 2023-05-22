import Image from "next/image";

const Documentary = () => {
  return (
    <div className="documentary">
      <div className="title">Documentário</div>
      <div className="video">
        <Image
          width="100"
          height="100"
          src="our-history-youtube.jpg"
          alt="youtube video"
        />
      </div>
    </div>
  );
};

export default Documentary;
