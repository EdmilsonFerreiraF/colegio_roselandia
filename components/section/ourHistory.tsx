import Link from "next/link";

const OurHistory = ({ data }: any) => {
  return (
    <div className="our-history">
      <div className="title-subtitle">
        <div className="title">
          <h3
            style={{
              cursor: "pointer",
            }}
          >
            <Link href="/nossa-historia">
              Nossa história
              <br />
              30 anos
            </Link>
          </h3>
        </div>
        <div className="subtitle">
          <p>{data.texto}</p>
          <div className="down-arrow-icon"></div>
        </div>
      </div>
      <div className="video">
        <iframe
          width="560"
          height="315"
          src={data.video_url}
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>{" "}
      </div>
    </div>
  );
};

export default OurHistory;
