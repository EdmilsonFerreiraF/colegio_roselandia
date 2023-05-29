const Documentary = ({ data }: any) => {
  return (
    <div className="documentary">
      <div className="title">Documentário</div>
      <div className="video">
        <iframe
          width="100%"
          height="500"
          src={data.video}
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>{" "}
      </div>
    </div>
  );
};

export default Documentary;
